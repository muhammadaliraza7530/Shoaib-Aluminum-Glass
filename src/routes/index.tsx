import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Phone, Quote, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { img, showreelUrl, site } from "@/lib/site-data";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { AutoScroller } from "@/components/AutoScroller";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aspiring Homes — Luxury House Design & Construction, Pakistan" },
      {
        name: "description",
        content:
          "Aspiring Homes designs and builds luxury villas, Spanish-style houses and modern homes across Lahore, Faisalabad and Sialkot. Making quality houses since 2019.",
      },
      { property: "og:title", content: "Aspiring Homes — Luxury House Design & Construction" },
      {
        property: "og:description",
        content: "Villas, Spanish houses and modern homes — designed, built and finished by one team.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Aluminum Doors & Windows",
    description: "High-performance framing systems that make every opening feel intentional.",
    image: img.luxuryVilla,
  },
  {
    title: "Architectural Glass & Curtain Walls",
    description: "Clean, light-filled facades for contemporary homes and commercial spaces.",
    image: img.modernVilla,
  },
  {
    title: "Shower Enclosures & Partitions",
    description: "Minimal glass details that bring clarity and privacy to everyday spaces.",
    image: img.courtyard,
  },
  {
    title: "Custom Glass & Mirror Work",
    description: "Made-to-measure glass elements that finish a room with confidence.",
    image: img.classicMansion,
  },
  {
    title: "Maintenance & Installation",
    description: "Professional fitting and dependable aftercare from the same team.",
    image: img.brickFront,
  },
];

const testimonials = [
  { quote: "Shoaib Aluminum & Glass transformed our home frontage. The sliding doors are beautifully finished, operate silently and fit exactly as promised.", name: "Ayesha R.", role: "Homeowner, Lahore" },
  { quote: "Their site team coordinated well with our contractors and delivered the storefront on schedule. The finish is clean and genuinely professional.", name: "Hassan Malik", role: "Commercial Client, Lahore" },
  { quote: "They understood the design intent immediately and solved the technical details without compromising the elevation. A reliable fabrication partner.", name: "Mariam Farooq", role: "Architect & Interior Contractor" },
];

function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const showreelRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setVideoOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [videoOpen]);

  useEffect(() => {
    const video = showreelRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative flex min-h-[88svh] items-end overflow-hidden">
        <img src={img.luxuryVilla} alt="Modern aluminum and glass facade" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-primary">Shoaib Aluminum & Glass</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] sm:text-6xl lg:text-8xl">Built to frame the way you live.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">Premium aluminum fabrication, architectural glass and precision installation for homes, businesses and bold spaces.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent"><Phone className="size-4" /> Get a Free Quote</a>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary hover:text-primary">Explore Our Projects <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-primary">Showreel</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">See how we build</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">A short film of our sites, elevations and finished homes.</p>
            <div className="group relative mx-auto mt-10 block aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-3xl border border-primary/40 bg-card shadow-2xl">
              <video
                ref={showreelRef}
                src={showreelUrl}
                poster={img.luxuryVilla}
                playsInline
                loop
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {videoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Showreel video" onClick={() => setVideoOpen(false)}>
          <button type="button" aria-label="Close video" onClick={() => setVideoOpen(false)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-primary/60 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><X className="size-5" /></button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <video src={showreelUrl} poster={img.luxuryVilla} controls autoPlay playsInline className="w-full max-h-[80vh] rounded-2xl border border-primary/40 shadow-2xl" />
          </div>
        </div>
      )}

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="What we do" title="Complete solutions in aluminum and glass" intro="Designed around your space, fabricated with care and installed to perform." /></div>
        <div className="mt-12">
          <AutoScroller speed={100}>
            {services.map((service) => <article key={service.title} className="lit-panel flex w-[290px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]"><img src={service.image} alt={service.title} loading="lazy" className="aspect-[16/10] w-full shrink-0 object-cover" /><div className="p-6"><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p></div></article>)}
          </AutoScroller>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Why choose us" title="The detail is in the difference." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{"Premium Quality Materials & Finish Expert Fabrication & Precision Installation Competitive Pricing & On-Time Delivery Custom Designs Tailored to Your Specs".split("  ").map((item, index) => <Reveal key={item} delay={index * 80}><div className="lit-panel h-full bg-card p-6"><span className="text-4xl font-extrabold text-primary/30">0{index + 1}</span><h3 className="mt-5 text-base font-bold leading-snug">{item}</h3><ChevronRight className="mt-8 size-5 text-primary" /></div></Reveal>)}</div></div></section>

      <section className="border-y border-border bg-card/30 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Client reviews" title="Work that earns its place." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((testimonial) => <Reveal key={testimonial.name}><blockquote className="lit-panel h-full bg-card p-7"><Quote className="size-8 text-primary/70" /><p className="mt-6 text-sm leading-relaxed text-foreground/85">“{testimonial.quote}”</p><footer className="mt-7 border-t border-border pt-5"><p className="text-sm font-bold">{testimonial.name}</p><p className="mt-1 text-xs text-muted-foreground">{testimonial.role}</p></footer></blockquote></Reveal>)}</div></div></section>

      <section className="relative overflow-hidden py-24 lg:py-32"><div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" /><div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Your project starts here</p><h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">Bring your next space into focus.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Tell us what you are building. We will help you choose the right system, glass and finish for a result that looks exceptional and performs for years.</p><a href={`tel:${site.phoneTel}`} className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent">Get a Free Quote <ArrowRight className="size-4" /></a></div></section>
    </>
  );
}
