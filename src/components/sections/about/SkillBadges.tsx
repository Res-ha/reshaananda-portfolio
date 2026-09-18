export function SkillBadges({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors duration-300"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
