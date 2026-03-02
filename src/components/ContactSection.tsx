import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SEND_MAIL_API = import.meta.env.VITE_SEND_MAIL_API ?? "/api/send-mail.php";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(SEND_MAIL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        toast.success("Message sent! I'll get right back to you.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.error ?? "Failed to send. Try again or email directly.");
        openMailtoFallback(trimmedName, trimmedEmail, trimmedMessage);
      }
    } catch {
      toast.error("Could not reach server. Opening your email app instead.");
      openMailtoFallback(trimmedName, trimmedEmail, trimmedMessage);
    } finally {
      setSending(false);
    }
  };

  const openMailtoFallback = (n: string, e: string, m: string) => {
    const subject = encodeURIComponent("Portfolio contact from " + n);
    const body = encodeURIComponent(`Name: ${n}\nEmail: ${e}\n\nMessage:\n${m}`);
    window.location.href = `mailto:koushik@shustho.life?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-[520px] px-4 scroll-mt-24"
    >
      <div className="corner-brackets tape relative overflow-hidden rounded-lg bg-card p-6 pt-10 md:p-8 md:pt-12">
        <p className="mb-1 text-sm font-bold uppercase tracking-[0.2em] text-card-foreground/60">
          Contact:
        </p>
        <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-card-foreground">
          Drop me a line
        </h2>
        <p className="mb-8 text-base leading-relaxed text-card-foreground/80">
          Want to work together? If you think I can help you with your project,
          drop me an email at{" "}
          <a
            href="mailto:koushik@shustho.life"
            className="font-semibold underline underline-offset-2 hover:text-card-foreground"
          >
            koushik@shustho.life
          </a>{" "}
          or leave a message below and I&apos;ll get right back to you.
        </p>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-sm font-bold uppercase tracking-wider text-card-foreground/80">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-0 border-b border-card-foreground/30 rounded-none bg-transparent px-0 text-base text-card-foreground shadow-none placeholder:text-card-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-sm font-bold uppercase tracking-wider text-card-foreground/80">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 border-b border-card-foreground/30 rounded-none bg-transparent px-0 text-base text-card-foreground shadow-none placeholder:text-card-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message" className="text-sm font-bold uppercase tracking-wider text-card-foreground/80">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-0 border-b border-card-foreground/30 rounded-none bg-transparent px-0 text-base text-card-foreground shadow-none placeholder:text-card-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
            />
          </div>
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              disabled={sending}
              className="rounded-full bg-card-foreground/90 px-10 py-6 text-base font-bold uppercase tracking-wider text-card hover:bg-card-foreground disabled:opacity-70"
            >
              {sending ? "Sending…" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
