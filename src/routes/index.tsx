import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Phone, Quote } from "lucide-react";
import { useState } from "react";
import { img, site } from "@/lib/site-data";
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
    features: ["Sliding, casement and folding systems", "Thermal and weather-resistant profiles", "Precision hardware and smooth operation"],
    image: img.luxuryVilla,
  },
  {
    title: "Architectural Glass & Curtain Walls",
    description: "Clean, light-filled facades for contemporary homes and commercial spaces.",
    features: ["Structural glazing and curtain walls", "Frameless storefront solutions", "Safe, engineered glass assemblies"],
    image: img.modernVilla,
  },
  {
    title: "Shower Enclosures & Partitions",
    description: "Minimal glass details that bring clarity and privacy to everyday spaces.",
    features: ["Frameless shower enclosures", "Office and retail partitions", "Custom fittings and polished edges"],
    image: img.courtyard,
  },
  {
    title: "Custom Glass & Mirror Work",
    description: "Made-to-measure glass elements that finish a room with confidence.",
    features: ["Toughened and tempered glass", "Custom mirrors and feature panels", "Precision cutting for any dimension"],
    image: img.classicMansion,
  },
  {
    title: "Maintenance & Installation",
    description: "Professional fitting and dependable aftercare from the same team.",
    features: ["On-site measurement and planning", "Careful installation and sealing", "Repairs, adjustments and maintenance"],
    image: img.brickFront,
  },
];

const projects = [
  { title: "Contemporary Residence", category: "Residential", image: img.modernVilla },
  { title: "Frameless Office Front", category: "Commercial", image: img.luxuryHouse },
  { title: "Statement Mirror Wall", category: "Custom Glass", image: img.classicMansion },
];

const testimonials = [
  { quote: "Shoaib Aluminum & Glass transformed our home frontage. The sliding doors are beautifully finished, operate silently and fit exactly as promised.", name: "Ayesha R.", role: "Homeowner, Lahore" },
  { quote: "Their site team coordinated well with our contractors and delivered the storefront on schedule. The finish is clean and genuinely professional.", name: "Hassan Malik", role: "Commercial Client, Lahore" },
  { quote: "They understood the design intent immediately and solved the technical details without compromising the elevation. A reliable fabrication partner.", name: "Mariam Farooq", role: "Architect & Interior Contractor" },
];

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Custom Glass"];
  const visibleProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

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
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Explore Our Projects <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="What we do" title="Complete solutions in aluminum and glass" intro="Designed around your space, fabricated with care and installed to perform." /></div>
        <div className="mt-12">
          <AutoScroller speed={55}>
            {services.map((service) => <article key={service.title} className="lit-panel flex w-[290px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]"><img src={service.image} alt={service.title} loading="lazy" className="aspect-[16/10] w-full shrink-0 object-cover" /><div className="p-6"><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p><ul className="mt-5 space-y-2">{service.features.map((feature) => <li key={feature} className="flex gap-2 text-xs text-foreground/80"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{feature}</li>)}</ul></div></article>)}
          </AutoScroller>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Why choose us" title="The detail is in the difference." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Premium Quality Materials & Finish", "Expert Fabrication & Precision Installation", "Competitive Pricing & On-Time Delivery", "Custom Designs Tailored to Your Specs"].map((item, index) => <Reveal key={item} delay={index * 80}><div className="lit-panel h-full bg-card p-6"><span className="text-4xl font-extrabold text-primary/30">0{index + 1}</span><h3 className="mt-5 text-base font-bold leading-snug">{item}</h3><ChevronRight className="mt-8 size-5 text-primary" /></div></Reveal>)}</div></div></section>

      <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Featured projects" title="A glimpse of what we can create" intro="Explore a selection of residential, commercial and custom glass work." /><div className="mt-8 flex flex-wrap gap-2">{categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${activeCategory === category ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>{category}</button>)}</div><div className="mt-8 grid gap-5 md:grid-cols-3">{visibleProjects.map((project) => <Reveal key={project.title}><article className="group lit-panel overflow-hidden bg-card"><img src={project.image} alt={project.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{project.category}</p><h3 className="mt-2 text-lg font-bold">{project.title}</h3></div></article></Reveal>)}</div></div></section>

      <section className="border-y border-border bg-card/30 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Client reviews" title="Work that earns its place." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((testimonial) => <Reveal key={testimonial.name}><blockquote className="lit-panel h-full bg-card p-7"><Quote className="size-8 text-primary/70" /><p className="mt-6 text-sm leading-relaxed text-foreground/85">“{testimonial.quote}”</p><footer className="mt-7 border-t border-border pt-5"><p className="text-sm font-bold">{testimonial.name}</p><p className="mt-1 text-xs text-muted-foreground">{testimonial.role}</p></footer></blockquote></Reveal>)}</div></div></section>

      <section className="relative overflow-hidden py-24 lg:py-32"><div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" /><div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Your project starts here</p><h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">Bring your next space into focus.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Tell us what you are building. We will help you choose the right system, glass and finish for a result that looks exceptional and performs for years.</p><a href={`tel:${site.phoneTel}`} className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent">Get a Free Quote <ArrowRight className="size-4" /></a></div></section>
    </>
  );
}