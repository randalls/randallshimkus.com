import { SkillCard } from './skill-card'
import { SKILLS } from '@/app/data'

export function SkillsList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SKILLS.map((skill) => (
        <SkillCard
          name={skill.name}
          level={skill.level}
          usage={skill.usage}
          icon={skill.icon}
          color={skill.color}
          alternateColor={skill.alternateColor}
          invertColors={skill.invertColors}
          key={skill.name}
        />
      ))}
    </div>
  )
}
