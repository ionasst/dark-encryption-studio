import { createFileRoute } from "@tanstack/react-router";
import { EncrypterWorkspace } from "@/components/encrypter-workspace";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "RAT Encrypter — Simulation Workspace" },
    { name: "description", content: "A precision-designed black-and-red encrypter simulation workspace. A visual demo with no file processing." },
    { property: "og:title", content: "RAT Encrypter — Simulation Workspace" },
    { property: "og:description", content: "Explore an animated, local-only encrypter visual simulation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: EncrypterWorkspace,
});
