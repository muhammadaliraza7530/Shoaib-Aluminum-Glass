import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/site";
import { ComingSoonPage } from "@/components/PageBits";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Aspiring Homes" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title}, ${project.location} — Aspiring Homes`;
    return {
      meta: [
        { title },
        { name: "description", content: project.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: project.blurb },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return <ComingSoonPage image={project.image} />;
}
