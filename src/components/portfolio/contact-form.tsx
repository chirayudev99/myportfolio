import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";
import { contact } from "@/components/portfolio/portfolio-data";

const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=singhchirayu22%40gmail.com&su=Opportunity%20for%20Chirayu&body=Hi%20Chirayu%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding...";

type ContactFormProps = {
  triggerLabel: string;
  triggerClassName: string;
};

export function ContactForm({ triggerLabel, triggerClassName }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const loadingToast = toast.loading("Sending your message...");
    setIsSending(true);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_61f202v",
          template_id: "template_vpkup3b",
          user_id: "XZ2Vfzth11t6X2zE3",
          template_params: {
            from_name: String(formData.get("from_name") ?? ""),
            to_name: "Chirayu",
            from_email: String(formData.get("from_email") ?? ""),
            to_email: contact.email,
            message: String(formData.get("message") ?? ""),
          },
        }),
      });

      if (!response.ok) {
        const detail = await response.text();
        throw new Error(detail || `Email service returned ${response.status}.`);
      }

      toast.dismiss(loadingToast);
      toast.success("Message sent. Thanks for reaching out!");
      form.reset();
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(
        error instanceof Error
          ? `Message not sent: ${error.message}`
          : "Message not sent. Please try again or use Open in Gmail.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="contact-form-widget">
      <button
        aria-controls="portfolio-contact-form"
        aria-expanded={isOpen}
        className={`contact-form-trigger ${triggerClassName}`}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {triggerLabel} <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.form
            animate={{ opacity: 1, height: "auto", y: 0 }}
            className="contact-form-panel"
            exit={{ opacity: 0, height: 0, y: -8 }}
            id="portfolio-contact-form"
            initial={{ opacity: 0, height: 0, y: -8 }}
            onSubmit={handleSubmit}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <label>
              <span>Name</span>
              <input autoComplete="name" name="from_name" required />
            </label>
            <label>
              <span>Email</span>
              <input autoComplete="email" name="from_email" required type="email" />
            </label>
            <label className="contact-form-message">
              <span>Message</span>
              <textarea
                defaultValue="Hi Chirayu,\n\nI came across your portfolio and would love to connect regarding..."
                name="message"
                required
                rows={4}
              />
            </label>
            <div className="contact-form-actions">
              <button
                className="contact-form-send action-primary"
                disabled={isSending}
                type="submit"
              >
                {isSending ? "Sending..." : "Send message"}
                <Send size={15} aria-hidden="true" />
              </button>
              <a href={gmailComposeUrl} rel="noreferrer" target="_blank">
                Open in Gmail <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
