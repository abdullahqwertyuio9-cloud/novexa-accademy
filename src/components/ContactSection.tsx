import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, MapPin, Clock, Sparkles } from 'lucide-react';
import { OFFICIAL_EMAIL, WHATSAPP_DISPLAY, getWhatsAppLink } from '../utils/whatsapp';
import { triggerConfetti } from '../utils/confetti';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [courseInterest, setCourseInterest] = useState('YouTube 18 Days Formula');
  const [userMsg, setUserMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OFFICIAL_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();
    const formatted = `Hi Novexa Academy, my name is ${name || 'A Student'}. I am interested in ${courseInterest}. Message: ${userMsg || 'I want more details regarding course enrollment.'}`;
    window.open(getWhatsAppLink(formatted), "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            We Are Here To Help You{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Reach out to our enrollment team on WhatsApp or Email for course inquiries, partnership, or custom corporate training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-200/80 shadow-lg shadow-emerald-900/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Official WhatsApp Counselor</div>
                  <div className="text-lg font-bold text-slate-900 font-heading">{WHATSAPP_DISPLAY}</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fastest response channel for course enrollment, JazzCash confirmation, and instant guidance.
              </p>

              <a
                href={getWhatsAppLink("Hi Novexa Academy, I want to talk to a course counselor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-3xl p-6 border border-blue-200/80 shadow-lg shadow-blue-900/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Official Email Address</div>
                  <div className="text-sm font-bold text-slate-900 font-heading break-all">{OFFICIAL_EMAIL}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-3 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Address Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Support Hours Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-bold text-slate-900">Support Hours</div>
                  <div className="text-slate-500">Mon - Sat: 9:00 AM - 11:00 PM PKT</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Component */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Send Instant Message to WhatsApp
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below to generate a pre-formatted WhatsApp message for our enrollment desk.
            </p>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Ali Ahmed"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Interested Course</label>
                <select
                  value={courseInterest}
                  onChange={(e) => setCourseInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                >
                  <option value="YouTube 18 Days Formula">YouTube 18 Days Formula</option>
                  <option value="Fiverr AI Mastery">Fiverr AI Mastery</option>
                  <option value="Digital Marketing Training">Digital Marketing Training</option>
                  <option value="Adobe Illustrator Complete Course">Adobe Illustrator Complete Course</option>
                  <option value="Blogging Masterclass">Blogging Masterclass</option>
                  <option value="Professional Bundle (3 Courses)">Professional Bundle (3 Courses)</option>
                  <option value="Ultimate VIP All-Access">Ultimate VIP All-Access</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Question</label>
                <textarea
                  rows={3}
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Ask any question about course outline, timing, or JazzCash..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="shine-button w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open Message on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
