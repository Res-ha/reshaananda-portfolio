import c1 from "@/assets/collage-1.jpg";
import c2 from "@/assets/collage-2.jpg";
import c3 from "@/assets/collage-3.jpg";
import c4 from "@/assets/collage-4.jpg";
import c5 from "@/assets/collage-5.jpg";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const photos = [
  {
    src: c1,
    alt: {
      en: "Laptop with code open on a wooden desk",
      id: "Laptop dengan kode terbuka di meja kayu",
    },
    rotate: "rotate-2",
    extra: "",
  },
  {
    src: c2,
    alt: {
      en: "Hands sketching a website wireframe in a notebook",
      id: "Tangan menggambar wireframe website di buku catatan",
    },
    rotate: "-rotate-2",
    extra: "",
  },
  {
    src: c3,
    alt: {
      en: "Network rack with patch cables in an office",
      id: "Rak jaringan dengan kabel patch di kantor",
    },
    rotate: "rotate-1",
    extra: "",
  },
  {
    src: c4,
    alt: {
      en: "Screen showing a topographic map with GIS layers",
      id: "Layar menampilkan peta topografi dengan layer GIS",
    },
    rotate: "rotate-3",
    extra: "hidden sm:block",
  },
  {
    src: c5,
    alt: {
      en: "Notebook and coffee cup on a cafe table",
      id: "Buku catatan dan cangkir kopi di meja kafe",
    },
    rotate: "-rotate-2",
    extra: "hidden sm:block",
  },
];

export function PhotoCollage() {
  const { pick } = useLanguage();
  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 py-6 sm:justify-center sm:overflow-visible sm:px-6 lg:px-8">
        {photos.map((photo, i) => (
          <div
            key={photo.alt.en}
            className={cn("float-soft relative shrink-0 snap-center", photo.extra)}
            style={{ animationDelay: `${i * 400}ms` }}
          >
            <div
              className={cn(
                "aspect-9/10 w-40 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 transition-all duration-300 hover:z-10 hover:scale-105 hover:rotate-0 sm:w-44 lg:w-52 dark:bg-zinc-800 dark:ring-white/10",
                photo.rotate,
              )}
            >
              <img
                src={photo.src}
                alt={pick(photo.alt)}
                width={720}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
