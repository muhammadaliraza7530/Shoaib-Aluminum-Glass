import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { ComingSoonPage } from "@/components/PageBits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aspiring Homes — Design & Construction Firm, Pakistan" },
      {
        name: "description",
        content:
          "Aspiring Homes has been making quality houses since 2019 — an architecture, interior and construction firm working across Lahore, Faisalabad and Sialkot.",
      },
      { property: "og:title", content: "About Aspiring Homes" },
      {
        property: "og:description",
        content: "Making quality houses since 2019, from Lahore across Punjab, Pakistan.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <ComingSoonPage image={img.courtyard} />;
}
