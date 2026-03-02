import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MapPin, Calendar, Heart, Gift, Camera, ChevronRight, Menu, X, Instagram } from 'lucide-react';
import './index.css';

const FadeIn = ({ children, delay = 0, y = 20, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <FadeIn className="text-center mb-12 md:mb-20">
    <p className="font-serif italic text-sage text-lg md:text-xl mb-4">{subtitle}</p>
    <h2 className="font-serif text-4xl md:text-7xl text-neutral-800 tracking-tight leading-none">{title}</h2>
    <div className="w-16 h-px bg-sage/30 mx-auto mt-8" />
  </FadeIn>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1.1, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  return (
    <div className="bg-ivory text-neutral-900 font-sans selection:bg-sage selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain mix-blend-difference" />
        </div>
        <div className="hidden md:flex gap-12 font-serif text-sm uppercase tracking-widest mix-blend-difference text-white">
          <a href="#events" className="hover:text-sage transition-colors">Events</a>
          <a href="#gallery" className="hover:text-sage transition-colors">Gallery</a>
          <a href="#registry" className="hover:text-sage transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-sage transition-colors">RSVP</a>
        </div>
        <button className={`md:hidden transition-colors ${isMenuOpen ? 'text-neutral-800' : 'mix-blend-difference text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : '100%' }}
        className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden pointer-events-none data-[open=true]:pointer-events-auto"
        data-open={isMenuOpen}
      >
        <a href="#events" onClick={() => setIsMenuOpen(false)} className="font-serif text-3xl">Events</a>
        <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="font-serif text-3xl">Gallery</a>
        <a href="#registry" onClick={() => setIsMenuOpen(false)} className="font-serif text-3xl">Registry</a>
        <a href="#rsvp" onClick={() => setIsMenuOpen(false)} className="font-serif text-3xl">RSVP</a>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center p-0 overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <img src="/img/couplesimage2.jpeg" className="w-full h-full object-cover grayscale-[10%]" alt="Hero" />
          <div className="absolute inset-0 bg-neutral-950/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <FadeIn y={40}>
            <span className="font-serif uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block opacity-80 animate-fade-up">A Celebration of Eternal Love</span>
            <h1 className="font-script text-8xl md:text-[14rem] leading-none mb-4 drop-shadow-2xl">Gbemisola & Joy</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mt-12 font-serif text-lg md:text-2xl italic font-light tracking-widest uppercase animate-fade-up">
              <span>April 30</span>
              <Heart className="text-white invisible md:visible" size={16} />
              <span>May 2, 2026</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Invitation Text */}
      <section className="section-padding max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-12 text-center max-w-3xl mx-auto">
            <FadeIn>
              <Heart className="mx-auto text-sage mb-8 w-12 h-12 stroke-[1px]" />
              <p className="font-serif text-2xl md:text-4xl text-neutral-800 leading-relaxed italic mb-12">
                "Two souls but a single thought, two hearts that beat as one."
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-neutral-400 mb-16">The Families of</p>
              <div className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center mb-16">
                <div className="text-center md:text-right">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">MR & MRS MAKANJUOLA SELI</h3>
                  <p className="font-serif italic text-neutral-500">Parents of the Bride</p>
                </div>
                <div className="w-px h-12 bg-neutral-200 hidden md:block" />
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">BROTHER & SISTER OLATUJA FELIX</h3>
                  <p className="font-serif italic text-neutral-500">Parents of the Groom</p>
                </div>
              </div>
              <p className="font-serif text-lg text-neutral-600 leading-loose max-w-2xl mx-auto">
                Cordially invite you to the solemnization of holy matrimony of their children as they begin their beautiful journey of forever.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <div className="h-[60vh] md:h-[80vh] overflow-hidden relative">
        <motion.img
          initial={{ y: -50 }}
          whileInView={{ y: 50 }}
          transition={{ duration: 2 }}
          src="/img/couplesimage1.jpg"
          className="w-full h-[150%] object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h2 className="font-script text-white text-5xl md:text-[10rem] drop-shadow-xl leading-tight">True Love Stories Never End</h2>
        </div>
      </div>

      {/* Events Section */}
      <section id="events" className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeader title="The Ceremonies" subtitle="Save the Dates" />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Traditional */}
            <FadeIn delay={0.2} y={30}>
              <div className="group relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-8">
                  <img src="/img/coupleimage4.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sage uppercase font-bold text-xs tracking-widest">
                    <span>Traditional Wedding</span>
                    <div className="h-px flex-1 bg-neutral-100" />
                  </div>
                  <h3 className="font-serif text-4xl mb-4">Engagement Ceremony</h3>
                  <div className="flex items-start gap-4 text-neutral-500">
                    <Calendar size={18} className="mt-1" />
                    <div>
                      <p className="font-sans font-bold text-neutral-800">Thursday, April 30, 2026</p>
                      <p>12:00 NOON PROMPT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-neutral-500">
                    <MapPin size={18} className="mt-1" />
                    <div>
                      <p className="font-sans font-bold text-neutral-800">Sunbet Event Centre</p>
                      <p>Sijuade Akure, Ondo State Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Church */}
            <FadeIn delay={0.4} y={30}>
              <div className="group relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-8">
                  <img src="/img/coupleimage6.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sage uppercase font-bold text-xs tracking-widest">
                    <span>The Holy Matrimony</span>
                    <div className="h-px flex-1 bg-neutral-100" />
                  </div>
                  <h3 className="font-serif text-4xl mb-4">Church Blessing</h3>
                  <div className="flex items-start gap-4 text-neutral-500">
                    <Calendar size={18} className="mt-1" />
                    <div>
                      <p className="font-sans font-bold text-neutral-800">Saturday, May 2, 2026</p>
                      <p>10:00 AM PROMPT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-neutral-500">
                    <MapPin size={18} className="mt-1" />
                    <div>
                      <p className="font-sans font-bold text-neutral-800">Prayer Centre Church of God</p>
                      <p>Kilometer 7, Idanre Road, Akure. Ondo State.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto border border-neutral-100 p-12 rounded-3xl bg-ivory/50">
            <Heart className="mx-auto text-sage/30 mb-6" />
            <h4 className="font-serif text-2xl mb-4">The Reception</h4>
            <p className="text-neutral-500 italic mb-2">To follow immediately after the Church Wedding</p>
            <p className="font-serif font-bold text-xl uppercase tracking-widest text-neutral-800">Sunbet Event Centre, Akure</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Memories" subtitle="Beautiful Moments" />

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { src: "/img/gbemiimage1.jpeg", alt: "Gbemisola" },
              { src: "/img/couplesimage3.jpeg", alt: "The Couple" },
              { src: "/img/coupleimage5.jpg", alt: "Joyful Moment" },
              { src: "/img/couplesimage1.jpg", alt: "The Love" },
              { src: "/img/couplesimage2.jpeg", alt: "Focus" },
              { src: "/img/coupleimage6.jpg", alt: "Engagement" }
            ].map((img, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700">
                  <img src={img.src} alt={img.alt} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Instagram className="text-white opacity-60 w-8 h-8" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Colors */}
      <section className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <SectionHeader title="Wedding Tones" subtitle="The Theme" />
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-12">
            <div className="flex flex-col items-center gap-8">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white border border-neutral-100 shadow-inner flex items-center justify-center">
                <span className="font-serif italic text-neutral-300">Pure Ivory</span>
              </div>
              <p className="font-serif text-xl tracking-[0.2em] uppercase text-neutral-400">White</p>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-peach shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-white/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <p className="font-serif text-xl tracking-[0.2em] uppercase text-neutral-400">Dusty Peach</p>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-sage shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-white/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <p className="font-serif text-xl tracking-[0.2em] uppercase text-neutral-400">Sage Green</p>
            </div>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-32 max-w-5xl mx-auto bg-neutral-900 text-white rounded-[3rem] overflow-hidden group">
              <div className="grid md:grid-cols-2">
                <div className="h-96 md:h-auto overflow-hidden">
                  <img src="/img/galeandfila.jpeg" alt="Gele and Fila" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="p-12 md:p-20 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-peach via-white to-sage" />
                  <Camera size={40} className="text-white/20 mb-8" />
                  <h3 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Gele & Fila</h3>
                  <p className="text-neutral-400 mb-12 text-lg uppercase tracking-widest leading-loose">
                    Our official Aso-Ebi is available through G. Apparels. Prices include sewing for your convenience.
                  </p>
                  <div className="grid grid-cols-2 gap-8 max-w-md">
                    <div className="border border-white/10 p-6 rounded-2xl">
                      <p className="font-serif italic text-sage mb-2">Premium Gele</p>
                      <p className="text-3xl font-bold">₦10,000</p>
                      <p className="text-[10px] opacity-40 uppercase tracking-tighter mt-1">Inc. Sewing</p>
                    </div>
                    <div className="border border-white/10 p-6 rounded-2xl">
                      <p className="font-serif italic text-sage mb-2">Classic Fila</p>
                      <p className="text-3xl font-bold">₦5,000</p>
                      <p className="text-[10px] opacity-40 uppercase tracking-tighter mt-1">Inc. Sewing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gifting */}
      <section id="registry" className="section-padding bg-ivory/50 border-t border-neutral-100">
        <div className="container mx-auto">
          <SectionHeader title="Wedding Gift" subtitle="Registry" />
          <div className="max-w-4xl mx-auto text-center mb-20 text-neutral-600 leading-loose text-lg font-light italic">
            Our registry is but a humble request, for your presence is our true treasure. Should you wish to bless us with a token, we have provided the details below.
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="p-12 md:p-16 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-700">
                <Gift className="text-sage mb-8" size={32} />
                <h4 className="font-serif text-2xl mb-8 uppercase tracking-widest text-neutral-400 text-xs font-bold">General Contributions</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Account Number</p>
                    <p className="font-serif text-5xl tracking-tighter text-neutral-800 flex items-center gap-4">
                      2308080414
                      <ChevronRight className="text-sage/30" />
                    </p>
                  </div>
                  <div className="pt-8 flex justify-between items-end border-t border-neutral-50">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Banker</p>
                      <p className="font-serif text-xl">UBA Bank</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Receiver</p>
                      <p className="font-serif text-xl font-bold">Gbemisola Blessing Seli</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-12 md:p-16 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-700">
                <Heart className="text-sage mb-8" size={32} />
                <h4 className="font-serif text-2xl mb-8 uppercase tracking-widest text-neutral-400 text-xs font-bold">Support & Interac</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Email Address</p>
                    <p className="font-serif text-3xl md:text-4xl tracking-tighter text-neutral-800 break-all">selib7979@gmail.com</p>
                  </div>
                  <div className="pt-8 space-y-4 border-t border-neutral-50 text-neutral-600 text-sm">
                    <p className="flex justify-between"><span>Access Bank:</span> <span className="font-bold">0730277350</span></p>
                    <p className="flex justify-between"><span>Legal Name:</span> <span className="font-bold">Adefemisoye Moradeke A.</span></p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer / RSVP */}
      <footer id="rsvp" className="bg-neutral-950 text-white section-padding text-center">
        <FadeIn>
          <div className="mb-20">
            <h2 className="font-script text-7xl md:text-9xl mb-8">Gbemisola & Joy</h2>
            <p className="font-serif tracking-[0.5em] text-xs md:text-sm uppercase opacity-40">Witness Our Beginning 2026</p>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-24 border-t border-b border-white/5 py-12">
            <div>
              <p className="font-serif uppercase tracking-widest text-xs opacity-40 mb-4">RSVP / Contact</p>
              <p className="font-serif text-xl md:text-2xl font-light tracking-[0.2em]">+234 906 561 8702</p>
            </div>
            <div>
              <p className="font-serif uppercase tracking-widest text-xs opacity-40 mb-4">Support Line</p>
              <p className="font-serif text-xl md:text-2xl font-light tracking-[0.2em]">+234 813 681 6240</p>
            </div>
          </div>

          <div className="space-y-4">
            <Instagram size={24} className="mx-auto mb-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
            <p className="font-serif italic text-neutral-600 text-sm">A Garden of Love & Celebration</p>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
};

export default App;
