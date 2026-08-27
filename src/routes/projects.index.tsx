import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/PageBits";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Villas & Modern Homes | Aspiring Homes" },
      {
        name: "description",
        content:
          "Completed, ongoing and upcoming residential projects by Aspiring Homes — luxury villas, Spanish-style houses, modern facades and grey-structure construction.",
      },
      { property: "og:title", content: "Projects — Aspiring Homes" },
      {
        property: "og:description",
        content: "Luxury villas, Spanish homes and modern residences designed and built by Aspiring Homes.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <ComingSoonPage image={img.luxuryHouse} />;
}
