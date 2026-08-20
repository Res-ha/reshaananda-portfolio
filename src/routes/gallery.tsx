import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/Stagger";
import { useLanguage } from "@/lib/i18n";
import c1 from "@/assets/collage-1.jpg";
import c2 from "@/assets/collage-2.jpg";
import c3 from "@/assets/collage-3.jpg";
import c4 from "@/assets/collage-4.jpg";
import c5 from "@/assets/collage-5.jpg";
import portrait from "@/assets/portrait.jpg";

const images = [
  {
    src: c1,
    alt: {
      en: "Laptop with code open on a wooden desk",
      id: "Laptop dengan kode terbuka di meja kayu",
    },
  },
  {
    src: c2,
    alt: {
      en: "Hands sketching a website wireframe in a notebook",
      id: "Tangan menggambar wireframe website di buku catatan",
    },
  },
  {
    src: c3,
    alt: {
      en: "Network rack with patch cables in an office",
      id: "Rak jaringan dengan kabel patch di kantor",
    },
  },
  {
    src: c4,
    alt: {
      en: "Screen showing a topographic map with GIS layers",
      id: "Layar menampilkan peta topografi dengan layer GIS",
    },
  },
  {
    src: c5,
    alt: {
      en: "Notebook and coffee cup on a cafe table",
      id: "Buku catatan dan cangkir kopi di meja kafe",
    },
  },
  {
    src: portrait,
    alt: {
      en: "Portrait of Resha Ananda Rahman",
      id: "Potret Resha Ananda Rahman",
    },
  },
];

const title = "Gallery - Resha Ananda Rahman";
const description =
  "A small visual diary: desks, networks, maps, and the quiet corners where the work happens.";

export const Route = createFileRoute("/gallery")({
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
  component: Gallery,
});

function Gallery() {
  const { pick, t } = useLanguage();
  return (
    <Container className="mt-12 sm:mt-20">
      <FadeIn className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl ">
          {t("gallery.title")}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("gallery.intro")}</p>
      </FadeIn>

      <StaggerContainer className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
        {images.map((image) => (
          <div
            className="aspect-9/10 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
            key={image.alt.en}
          >
            <img
              src={image.src}
              alt={pick(image.alt)}
              width={720}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </StaggerContainer>
    </Container>
  );
}
