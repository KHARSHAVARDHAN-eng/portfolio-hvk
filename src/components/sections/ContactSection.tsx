import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Mail, FileText, CheckCircle2, Send, Sparkles, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sound.playHover();
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playStart();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-5xl mx-auto bg-[#180e28] arcade-purple-grid">
      {/* Stage Header Matching Screenshot */}
      <div className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] font-bold uppercase tracking-wider mb-2">
        STAGE 06 — CONTINUE? PRESS START.
      </div>

      <h2 className="font-silkscreen text-2xl sm:text-4xl font-extrabold text-[#ffffff] uppercase tracking-wider mb-8">
        CONTINUE? PRESS START.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Direct Action Buttons (Matching ▶ EMAIL ME Buttons in Reference) */}
        <div className="space-y-6">
          <div className="arcade-card-dark p-6 sm:p-8 border-3 border-[#ff2a85] shadow-[6px_6px_0px_#ffcc00]">
            <h3 className="font-silkscreen text-lg font-bold text-white mb-2">
              RECRUITER & DEVELOPER CONNECTIONS
            </h3>
            <p className="font-mono-tech text-xs sm:text-sm text-[#cbbad9] mb-6 leading-relaxed">
              Seeking full-time roles, software engineering internships, AI/ML research collaborations, or open-source opportunities.
            </p>

            <div className="space-y-3 font-silkscreen text-xs">
              {/* Copy Email */}
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sound.playHover()}
                className="w-full arcade-btn arcade-btn-pink py-3.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2.5 text-white">
                  <Mail className="w-4 h-4" />
                  <span>▶ EMAIL ME ({personalInfo.socials.email})</span>
                </span>
                <span className="flex items-center gap-1 text-white font-bold">
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? 'COPIED!' : 'COPY'}
                </span>
              </button>

              {/* Resume */}
              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="w-full arcade-btn arcade-btn-yellow py-3.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2.5 text-[#120a21]">
                  <FileText className="w-4 h-4" />
                  <span>RESUME.PDF</span>
                </span>
                <span className="text-[#120a21] font-bold">DOWNLOAD →</span>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="w-full arcade-btn arcade-btn-outline py-3.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB@KHARSHAVARDHAN-ENG</span>
                </span>
                <span className="text-slate-300 font-bold">VISIT →</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="w-full arcade-btn arcade-btn-outline py-3.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN/IN/K-HARSHAVARDHAN</span>
                </span>
                <span className="text-slate-300 font-bold">CONNECT →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div>
          <div className="arcade-card-cream p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_#ff2a85]">
            <h3 className="font-silkscreen text-base sm:text-lg font-bold text-[#120a21] mb-2 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ff2a85]" />
              DIRECT TRANSMISSION FORM
            </h3>
            <p className="font-mono-tech text-xs text-slate-700 mb-6">
              Fill in your details below to leave a message.
            </p>

            {submitted ? (
              <div className="bg-white border-2 border-black p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-silkscreen font-bold text-lg text-[#120a21]">TRANSMISSION RECORDED!</h4>
                <p className="font-mono-tech text-xs text-slate-800">
                  Thank you for reaching out. I will respond to your message shortly via email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="arcade-btn arcade-btn-pink px-4 py-2 text-xs mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-silkscreen text-[10px] text-[#120a21] block mb-1 font-bold">
                    YOUR NAME / TITLE:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tech Lead @ Company"
                    className="w-full bg-white border-2 border-black p-2.5 text-xs font-mono-tech text-[#120a21] outline-none focus:border-[#ff2a85]"
                  />
                </div>

                <div>
                  <label className="font-silkscreen text-[10px] text-[#120a21] block mb-1 font-bold">
                    EMAIL ADDRESS:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full bg-white border-2 border-black p-2.5 text-xs font-mono-tech text-[#120a21] outline-none focus:border-[#ff2a85]"
                  />
                </div>

                <div>
                  <label className="font-silkscreen text-[10px] text-[#120a21] block mb-1 font-bold">
                    MESSAGE CONTENT:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe potential role, internship, or project..."
                    className="w-full bg-white border-2 border-black p-2.5 text-xs font-mono-tech text-[#120a21] outline-none resize-none focus:border-[#ff2a85]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="w-full arcade-btn arcade-btn-pink py-3 text-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Transmit Message →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
