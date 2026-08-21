export function SkillBadges({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-foreground transition-colors duration-300 dark:bg-zinc-800 "
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
