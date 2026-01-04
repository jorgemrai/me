import { Experience } from "@/lib/content";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="card p-6 md:p-8 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-gray-500">{experience.company}</p>
          <h3 className="text-2xl font-semibold text-heading">{experience.role}</h3>
        </div>
        <p className="text-sm text-gray-600 whitespace-nowrap">{experience.dates}</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
