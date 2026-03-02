import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const EMAIL = "kushalka@clarkson.edu";
const SEND_MAIL_API = import.meta.env.VITE_SEND_MAIL_API ?? "/api/send-mail.php";

const SocialIcons = () => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!name.trim() || !senderEmail.trim() || !message.trim()) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(SEND_MAIL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: senderEmail.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setEmailOpen(false);
        setName("");
        setSenderEmail("");
        setMessage("");
      } else {
        toast.error(data.error ?? "Failed to send. Try again or email directly.");
      }
    } catch {
      toast.error("Network error. Try again or email " + EMAIL + " directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto flex max-w-[700px] overflow-hidden border-b border-card-foreground/20"
      >
        <a
          href="https://github.com/Koushikl0l"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center border-r border-card-foreground/20 bg-card py-5 text-card-foreground transition-colors hover:bg-card-foreground/5"
          title="GitHub"
        >
          <Github className="h-6 w-6" strokeWidth={2} />
        </a>
        <a
          href="https://medium.com/@koushikkushal95"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center border-r border-card-foreground/20 bg-card py-5 text-card-foreground transition-colors hover:bg-card-foreground/5"
          title="Medium"
        >
          <img src="/medium-logo.svg" alt="Medium" className="h-5 w-auto max-w-[90px] object-contain" />
        </a>
        <button
          type="button"
          onClick={() => setEmailOpen(true)}
          className="flex flex-1 items-center justify-center bg-card py-5 text-card-foreground transition-colors hover:bg-card-foreground/5"
          title="Email"
        >
          <Mail className="h-6 w-6" strokeWidth={2} />
        </button>
      </motion.div>

      <Dialog open={emailOpen} onOpenChange={setEmailOpen}>
        <DialogContent className="border-zinc-800 bg-zinc-900 p-0 text-zinc-100 sm:max-w-md [&>button]:hidden">
          <div className="p-6 pb-4">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-left text-base font-semibold text-zinc-100">
                <Mail className="h-5 w-5 shrink-0" />
                Email to {EMAIL}
              </DialogTitle>
            </DialogHeader>
            <form
              id="email-form"
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="email-name" className="text-zinc-300">
                  Name
                </Label>
                <Input
                  id="email-name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-zinc-700 bg-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-sender" className="text-zinc-300">
                  Email
                </Label>
                <Input
                  id="email-sender"
                  type="email"
                  placeholder="your@email.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="border-zinc-700 bg-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-message" className="text-zinc-300">
                  Message
                </Label>
                <Textarea
                  id="email-message"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="resize-none border-zinc-700 bg-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-600"
                />
              </div>
              <div className="flex justify-end gap-3 border-t border-zinc-800 pt-4">
                <Button
                  type="button"
                  variant="ghost"
                  className="text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                  onClick={() => setEmailOpen(false)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={sending}
                  className="bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SocialIcons;
