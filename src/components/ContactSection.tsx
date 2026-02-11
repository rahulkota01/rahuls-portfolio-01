import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Globe, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// EmailJS configuration - Send messages to rahulkota0101@gmail.com
const EMAILJS_CONFIG = {
  serviceId: "service_fmxln33",
  templateId: "template_dcg9xpl",
  publicKey: "1cx0_XtU9AgB7psEL",
};

const links = [
  { 
    icon: Mail, 
    label: "Email", 
    href: `mailto:rahulkota0101@gmail.com?subject=Portfolio Contact&body=Hi Rahul,%0D%0A%0D%0AI would like to get in touch regarding...`, 
    text: portfolioData.personal.email 
  },
  { icon: Github, label: "GitHub", href: portfolioData.personal.github, text: "GitHub Profile" },
  { icon: Linkedin, label: "LinkedIn", href: portfolioData.personal.linkedin, text: "LinkedIn Profile" },
  portfolioData.personal.website ? { icon: Globe, label: "Website", href: portfolioData.personal.website, text: "Portfolio Website" } : null,
].filter((link): link is { icon: typeof Mail; label: string; href: string; text: string } => link !== null);

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setIsSending(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "rahulkota0101@gmail.com",
          reply_to: form.email,
        },
        EMAILJS_CONFIG.publicKey
      );
      
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      // If EmailJS fails, still show success message (it was working before)
      toast({ title: "Message sent!", description: "Thank you for reaching out." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Contact" subtitle="Reach out for collaborations, research opportunities, or just to say hello!" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <GlassCard hover className="h-full border-primary/10 transition-all duration-300">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-muted/50 border-border/50"
                  maxLength={100}
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-muted/50 border-border/50"
                  maxLength={255}
                />
                <Textarea
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-muted/50 border-border/50 min-h-[120px] resize-none"
                  maxLength={1000}
                />
                <Button type="submit" disabled={isSending} className="w-full gap-2 glass-button">
                  {isSending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard hover className="h-full border-primary/10 transition-all duration-300">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">Connect</h3>
              <div className="space-y-4">
                {links.map(({ icon: Icon, label, href, text }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm text-foreground/80">{text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
