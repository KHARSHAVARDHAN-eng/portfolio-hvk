import React, { useState } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Mail, FileText, CheckCircle2, ArrowLeft, Send, Sparkles, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ContactStage: React.FC = () => {
  const { setStage } = useArcade();
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
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-pink-500/30">
        <div>
          <div className="inline-block bg-pink-950/80 border border-pink-500/40 px-3 py-1 rounded text-xs font-silkscreen text-pink-300 mb-2">
            [ STAGE 07: GAME OVER / HIGH SCORE ]
          </div>
          <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider glow-magenta">
            CONTINUE? PRESS START.
          </h2>
        </div>
        <button
          onClick={() => setStage('MENU')}
          onMouseEnter={() => sound.playHover()}
          className="arcade-btn arcade-btn-outline px-3.5 py-1.5 text-xs flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO MENU</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Arcade Action Buttons */}
        <div className="space-y-6">
          <div className="arcade-panel p-6 sm:p-8 rounded-xl border-2 border-pink-500/40">
            <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-white mb-2 glow-magenta">
              HIGH SCORE TRANSMISSION
            </h3>
            <p className="font-mono-tech text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Seeking full-time roles, software engineering internships, AI/ML research collaborations, or open-source opportunities.
            </p>

            {/* Quick Links matching [▶ EMAIL ME] style */}
            <div className="space-y-3 font-silkscreen text-xs">
              {/* Copy Email */}
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sound.playHover()}
                className="w-full arcade-btn arcade-btn-amber py-3.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2.5 text-black">
                  <Mail className="w-4 h-4" />
                  <span>▶ EMAIL ME ({personalInfo.socials.email})</span>
                </span>
                <span className="flex items-center gap-1 text-black font-bold">
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? 'COPIED!' : 'COPY'}
                </span>
              </button>

              {/* Resume */}
              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="w-full arcade-btn arcade-btn-outline py-3.5 px-4 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>RESUME.PDF</span>
                </span>
                <span className="text-cyan-400 font-bold">DOWNLOAD →</span>
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
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GITHUB@KHARSHAVARDHAN-ENG</span>
                </span>
                <span className="text-slate-400 font-bold">VISIT →</span>
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
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LINKEDIN/IN/K-HARSHAVARDHAN</span>
                </span>
                <span className="text-cyan-400 font-bold">CONNECT →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div>
          <div className="arcade-panel p-6 sm:p-8 rounded-xl border-2 border-slate-800">
            <h3 className="font-silkscreen text-base sm:text-lg font-bold text-white mb-2 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" />
              DIRECT TRANSMISSION FORM
            </h3>
            <p className="font-mono-tech text-xs text-slate-400 mb-6">
              Send a direct message into the arcade log.
            </p>

            {submitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/40 p-6 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-silkscreen font-bold text-lg text-white">TRANSMISSION RECORDED!</h4>
                <p className="font-mono-tech text-xs text-slate-300">
                  Thank you. I will respond to your message shortly via email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="arcade-btn arcade-btn-outline px-4 py-2 text-xs mt-2"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-silkscreen text-[10px] text-slate-400 block mb-1">
                    YOUR NAME / RECRUITER TITLE:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tech Recruiter @ Company"
                    className="w-full bg-slate-900 border border-slate-700 focus:border-pink-500 p-2.5 rounded text-xs font-mono-tech text-white outline-none"
                  />
                </div>

                <div>
                  <label className="font-silkscreen text-[10px] text-slate-400 block mb-1">
                    EMAIL ADDRESS:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full bg-slate-900 border border-slate-700 focus:border-pink-500 p-2.5 rounded text-xs font-mono-tech text-white outline-none"
                  />
                </div>

                <div>
                  <label className="font-silkscreen text-[10px] text-slate-400 block mb-1">
                    MESSAGE:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe potential role, internship, or project..."
                    className="w-full bg-slate-900 border border-slate-700 focus:border-pink-500 p-2.5 rounded text-xs font-mono-tech text-white outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="w-full arcade-btn arcade-btn-amber py-3 text-xs flex items-center justify-center gap-2 font-silkscreen"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>TRANSMIT MESSAGE →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
