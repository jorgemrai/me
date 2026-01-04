interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold text-heading mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-gray-700 max-w-3xl">{subtitle}</p>}
    </div>
  );
}
