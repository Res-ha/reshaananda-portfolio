import { createFileRoute, Outlet } from "@tanstack/react-router";

const title = "Projects - Resha Ananda Rahman";
const description =
  "A mix of client work and internal tools - most of them quiet systems that people use every day without thinking about them.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsLayout,
});

function ProjectsLayout() {
  // Required: child routes (list + detail) render through this Outlet.
  return <Outlet />;
}
