'use client';
import { useState } from 'react';
import { Mail, MessageCircle, Briefcase, Code2, ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import FadeIn from './FadeIn';

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'muazamalisarwarofficial@gmail.com',
    href: 'mailto:muazamalisarwarofficial@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'Phone / WhatsApp',
    value: '+92 326 8848703',
    href: 'tel:+923268848703',
  },
  {
    icon: Briefcase,
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://linkedin.com',
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'GitHub Profile',
    href: 'https://github.com',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error('Server returned an unexpected response. Please try restarting your local dev server.');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-transparent px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
    >
      {/* Heading */}
      <FadeIn y={80}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Get in touch
        </h2>
      </FadeIn>

      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl gap-10 lg:gap-14">
        
        {/* Left side: Form */}
        <div className="w-full lg:w-3/5">
          <FadeIn delay={0.15} y={30}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 rounded-[32px] sm:rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-8 sm:p-10 md:p-12">
              <div className="flex flex-col gap-2 mb-2">
                <h3 className="font-medium text-[#D7E2EA]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                  Send a message
                </h3>
                <p className="font-light text-[#D7E2EA]/60" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70 ml-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-[#D7E2EA] outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 placeholder:text-[#D7E2EA]/30 font-light disabled:opacity-50 disabled:cursor-not-allowed" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70 ml-1">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-[#D7E2EA] outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 placeholder:text-[#D7E2EA]/30 font-light disabled:opacity-50 disabled:cursor-not-allowed" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70 ml-1">
                  Message
                </label>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-[#D7E2EA] outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 placeholder:text-[#D7E2EA]/30 font-light resize-none disabled:opacity-50 disabled:cursor-not-allowed" 
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-light px-2">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-light px-2">
                  <CheckCircle2 size={16} />
                  <span>Message sent successfully! I'll be in touch soon.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="mt-4 group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-[#D7E2EA] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 hover:border-white/30 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {status === 'loading' ? (
                    <>
                      Sending...
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </span>
                {status !== 'loading' && (
                  <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                )}
              </button>
            </form>
          </FadeIn>
        </div>

        {/* Right side: Contact Methods */}
        <div className="w-full lg:w-2/5 flex flex-col gap-4 sm:gap-5 md:gap-6">
          {CONTACT_METHODS.map((method, i) => {
            const Icon = method.icon;
            const isExternal = method.href.startsWith('http');

            return (
              <FadeIn key={method.label} delay={i * 0.15} y={30}>
                <a
                  href={method.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group relative flex h-full items-center gap-6 rounded-[28px] sm:rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-6 sm:p-7 md:p-8 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
                >
                  <div className="rounded-full border border-[#D7E2EA]/20 p-4 transition-colors duration-300 group-hover:border-[#D7E2EA]/50 shrink-0">
                    <Icon
                      className="text-[#D7E2EA]"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 sm:gap-2 flex-1 min-w-0">
                    <span
                      className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
                      style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)' }}
                    >
                      {method.label}
                    </span>
                    <span
                      className="font-medium text-[#D7E2EA] truncate"
                      style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)' }}
                    >
                      {method.value}
                    </span>
                  </div>

                  <ArrowUpRight
                    className="text-[#D7E2EA]/40 transition-all duration-300 group-hover:text-[#D7E2EA] group-hover:rotate-12 shrink-0 hidden sm:block"
                    size={20}
                    strokeWidth={1.5}
                  />
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Footer line */}
      <FadeIn delay={0.4} y={20}>
        <div className="mx-auto mt-20 sm:mt-24 md:mt-28 flex max-w-7xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8 text-center sm:flex-row sm:justify-between">
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            © 2026 Muazam Ali
          </span>
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            Designed & built in Lahore
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
