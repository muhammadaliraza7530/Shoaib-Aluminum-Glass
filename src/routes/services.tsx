import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { ComingSoonPage } from "@/components/PageBits";
// import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Architecture, Construction & Interiors | Aspiring Homes" },
      {
        name: "description",
        content:
          "Architecture design, grey structure and finishing construction, interior design, renovation and 3D visualisation by Aspiring Homes, Lahore.",
      },
      { property: "og:title", content: "Services — Aspiring Homes" },
      {
        property: "og:description",
        content: "Design, construction, interiors and renovation delivered by one team.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <ComingSoonPage image={img.spanishVilla} />;
}
