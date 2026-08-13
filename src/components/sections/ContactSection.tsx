import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowingCard } from '../ui/GlowingCard';
import { MagneticButton } from '../ui/MagneticButton';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger festive celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#4facfe', '#7928ca', '#00f5a0']
    });

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="06"
          title="Get In Touch & Collaborate"
          subtitle="Interested in GraphRAG engineering, AI research collaboration, or open software opportunities? Reach out directly."
          badge="Direct Contact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Email Copy Pill */}
          <div className="lg:col-span-5 space-y-6">
            <GlowingCard glowColor="rgba(0, 242, 254, 0.2)">
              <span className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest block mb-2">
                // DIRECT COMMUNICATIONS
              </span>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Let's Build Something Extraordinary</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you have an open AI/ML role, technical inquiry, or want to discuss enterprise retrieval architectures, I am always open to compelling conversations.
              </p>

              {/* Copy Email Bar */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono-tech text-xs sm:text-sm text-slate-200 truncate">
                    {personalInfo.socials.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black text-slate-300 text-xs font-mono-tech transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs font-mono-tech text-slate-400 block mb-3">Professional Profiles:</span>
                <div className="flex flex-wrap gap-3">
                  <MagneticButton href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" variant="glass">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </MagneticButton>

                  <MagneticButton href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" variant="glass">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </MagneticButton>

                  <MagneticButton href={personalInfo.socials.resume} target="_blank" rel="noopener noreferrer" variant="outline">
                    <FileText className="w-4 h-4" />
                    <span>Resume</span>
                  </MagneticButton>
                </div>
              </div>

            </GlowingCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlowingCard glowColor="rgba(121, 40, 202, 0.2)">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Message Transmitted!</h4>
                  <p className="text-sm text-slate-300 mt-2">
                    Thank you for reaching out. I will respond to your email promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 px-4 py-2 rounded-xl bg-slate-800 text-xs font-mono-tech text-cyan-300 hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono-tech text-xs text-slate-400 mb-1.5">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs text-slate-400 mb-1.5">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@techcorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs text-slate-400 mb-1.5">MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Discuss your project, open opportunity, or technical inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 transition-colors text-sm resize-none"
                    />
                  </div>

                  <MagneticButton variant="primary" className="w-full mt-2">
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </MagneticButton>
                </form>
              )}
            </GlowingCard>
          </div>

        </div>

      </div>
    </section>
  );
};
