/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  PhoneCall, 
  Mail, 
  ChevronRight,
  AlertCircle,
  Layout,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = "9476889478";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppButton = ({ className = "", text = "Contact on WhatsApp" }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-primary-black font-bold rounded-full transition-all hover:bg-opacity-90 shadow-[0_0_20px_rgba(212,175,55,0.3)] ${className}`}
  >
    <MessageCircle size={24} />
    {text}
  </motion.a>
);

const SectionHeading = ({ children, className = "" }) => (
  <h2 className={`text-3xl md:text-6xl font-display font-extrabold tracking-tight mb-8 leading-[1.1] ${className}`}>
    {children}
  </h2>
);

export default function App() {
  return (
    <div className="min-h-screen bg-primary-black text-text-white selection:bg-accent-gold selection:text-primary-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-extrabold tracking-tighter uppercase">
            THE MARKETING <span className="text-accent-gold">FACTORY</span>
          </div>
          <div className="hidden md:block">
            <WhatsAppButton className="px-6 py-2 text-sm" text="Get Started" />
          </div>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <header className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Office" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-transparent to-primary-black" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-[1.05] tracking-tighter mb-8">
              Get Your Business Online in Just <span className="text-accent-gold">3 Days</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto font-medium">
              Start getting customer inquiries without any technical hassle.
            </p>
            <div className="flex flex-col items-center gap-6">
              <WhatsAppButton className="px-10 py-5 text-lg" />
              <p className="text-xs text-text-secondary uppercase tracking-[0.3em] font-bold">
                No technical knowledge needed
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Section 2: Problem */}
      <section className="py-32 px-6 bg-secondary-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading>
              Your Customers Are Searching Online. <span className="text-accent-gold">You Are Missing Out.</span>
            </SectionHeading>
            <div className="space-y-8">
              {[
                "People search on Google before visiting any business",
                "If you are not online, they choose your competitor",
                "No website means lost customers every day"
              ].map((point, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="mt-1 text-accent-gold bg-accent-gold/10 p-2 rounded-lg">
                    <AlertCircle size={24} />
                  </div>
                  <p className="text-xl text-text-secondary leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl border border-white/5 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Growth" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="py-32 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/[0.02] -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <SectionHeading>We Set Up Your Complete Online Presence</SectionHeading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Professional Website", desc: "A clean, modern site for your business" },
              { icon: Smartphone, title: "Mobile Friendly", desc: "Looks great on all phones and tablets" },
              { icon: MessageCircle, title: "WhatsApp Integration", desc: "Direct buttons for instant inquiries" },
              { icon: Layout, title: "Simple Inquiry Form", desc: "Easy for customers to reach you" }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-secondary-dark rounded-3xl border border-white/5 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-2">
                <item.icon size={48} className="text-accent-gold mb-8" />
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 rounded-3xl overflow-hidden border border-white/5 aspect-[21/9]">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
              alt="Digital Marketing Dashboard" 
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Section 4: What You Get */}
      <section className="py-32 px-6 bg-secondary-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <SectionHeading className="mb-0">Everything Done For You</SectionHeading>
            </div>
            <WhatsAppButton className="px-8 py-4" text="Ask Questions" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Ready-to-use website",
              "Business details setup",
              "Contact system integrated",
              "Fast and clean design"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-5 p-8 bg-primary-black rounded-2xl border border-white/5">
                <CheckCircle2 className="text-accent-gold" size={28} />
                <span className="text-xl font-bold">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Speed Advantage */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-gold/[0.03]" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-xs font-bold mb-10 uppercase tracking-[0.2em]">
            <Zap size={16} /> Speed Advantage
          </div>
          <SectionHeading>Live in Just 3 Days</SectionHeading>
          <div className="grid md:grid-cols-3 gap-16 mt-20">
            {[
              { icon: Clock, title: "Quick Setup", desc: "No complicated forms or long meetings" },
              { icon: ShieldCheck, title: "No Waiting", desc: "We work fast so you don't have to wait" },
              { icon: TrendingUp, title: "Start Fast", desc: "Receive inquiries within the first week" }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-20 h-20 bg-accent-gold rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary-black group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Process */}
      <section className="py-32 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <SectionHeading>Simple 3-Step Process</SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-16 left-0 w-full h-px bg-white/5 -z-10" />
            
            {[
              { step: "01", title: "Share Details", desc: "Tell us about your business and services" },
              { step: "02", title: "We Build", desc: "Our experts create your professional website" },
              { step: "03", title: "Go Live", desc: "Start receiving customer inquiries instantly" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary-black border-2 border-accent-gold flex items-center justify-center mx-auto mb-10 text-4xl font-display font-extrabold text-accent-gold shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  {item.step}
                </div>
                <h3 className="text-3xl font-display font-bold mb-5">{item.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="py-32 px-6 bg-secondary-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <SectionHeading>Simple & Affordable Pricing</SectionHeading>
          </div>
          <div className="bg-primary-black border border-white/5 rounded-[2.5rem] p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-[100px] -mr-32 -mt-32" />
            <div className="space-y-10 relative z-10">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/5 pb-8 gap-4">
                <div>
                  <h4 className="text-2xl font-display font-bold">Website Setup</h4>
                  <p className="text-text-secondary mt-1">One-time payment</p>
                </div>
                <div className="text-3xl font-display font-extrabold text-accent-gold">₹5,000</div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/5 pb-8 gap-4">
                <div>
                  <h4 className="text-2xl font-display font-bold">Hosting</h4>
                  <p className="text-text-secondary mt-1">Per year</p>
                </div>
                <div className="text-3xl font-display font-extrabold text-accent-gold">₹3,000</div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h4 className="text-2xl font-display font-bold">Maintenance</h4>
                  <p className="text-text-secondary mt-1">Per month</p>
                </div>
                <div className="text-3xl font-display font-extrabold text-accent-gold">₹799</div>
              </div>
            </div>
            <div className="mt-16">
              <WhatsAppButton className="w-full py-6 text-xl" text="Get a Custom Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose Us */}
      <section className="py-32 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="aspect-square bg-secondary-dark rounded-[2rem] border border-white/5 flex items-center justify-center">
                  <TrendingUp className="text-accent-gold" size={64} />
                </div>
                <div className="aspect-square bg-accent-gold rounded-[2rem] flex items-center justify-center text-primary-black">
                  <ShieldCheck size={64} />
                </div>
                <div className="aspect-square bg-accent-gold rounded-[2rem] flex items-center justify-center text-primary-black">
                  <Clock size={64} />
                </div>
                <div className="aspect-square bg-secondary-dark rounded-[2rem] border border-white/5 flex items-center justify-center">
                  <Layout className="text-accent-gold" size={64} />
                </div>
              </div>
              <div className="absolute -inset-4 bg-accent-gold/5 blur-3xl rounded-full -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading>Why The Marketing Factory</SectionHeading>
              <div className="space-y-10">
                {[
                  { title: "Fast Delivery", desc: "We respect your time and deliver in 3 days." },
                  { title: "Professional Look", desc: "Premium design that builds trust with customers." },
                  { title: "Local Support", desc: "We are here to help you whenever you need." },
                  { title: "Focused on Results", desc: "Our only goal is to help you get more customers." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="mt-1 text-accent-gold shrink-0">
                      <ChevronRight size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold mb-2">{item.title}</h4>
                      <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-40 px-6 bg-secondary-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionHeading className="md:text-7xl">Let’s Get Your Business Online</SectionHeading>
          <p className="text-2xl text-text-secondary mb-14 max-w-3xl mx-auto font-medium">
            Limited slots available this month. Don't wait for your competitors to take your customers.
          </p>
          <WhatsAppButton className="px-16 py-6 text-xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <div>
              <div className="text-2xl font-display font-extrabold tracking-tighter mb-8 uppercase">
                THE MARKETING <span className="text-accent-gold">FACTORY</span>
              </div>
              <p className="text-text-secondary text-lg max-w-sm leading-relaxed">
                Helping local small businesses in India grow with professional online presence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h5 className="text-accent-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Contact Us</h5>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4 text-text-secondary text-lg">
                    <PhoneCall size={20} className="text-accent-gold" />
                    9476889478
                  </li>
                  <li className="flex items-center gap-4 text-text-secondary text-lg">
                    <Mail size={20} className="text-accent-gold" />
                    subhajit@themarketingfactory.in
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-accent-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Quick Links</h5>
                <ul className="space-y-5">
                  <li><a href={WHATSAPP_LINK} className="text-text-secondary hover:text-accent-gold transition-colors text-lg">Contact on WhatsApp</a></li>
                  <li><a href="#" className="text-text-secondary hover:text-accent-gold transition-colors text-lg">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-text-secondary/40 text-sm font-medium">
            <p>© 2026 The Marketing Factory. All rights reserved.</p>
            <p className="uppercase tracking-widest">Designed for small business owners in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
