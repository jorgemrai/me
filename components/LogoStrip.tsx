import Image from "next/image";

interface LogoStripProps {
  heading: string;
}

const logos = [
  { src: "/logos/xtrim.svg", alt: "XTRIM" },
  { src: "/logos/mapfre.svg", alt: "MAPFRE" },
  { src: "/logos/claro.svg", alt: "Claro" },
  { src: "/logos/righttek.svg", alt: "Righttek" },
];

export default function LogoStrip({ heading }: LogoStripProps) {
  return (
    <div className="card p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-600">{heading}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo.src} className="flex items-center justify-center grayscale">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
