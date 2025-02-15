import { SKILLS } from '@/app/data'

export function SkillsUsedList(props: { companyName: string }) {
  return (
    <div className="grid grid-cols-6 gap-2 md:grid-cols-12">
      {SKILLS.filter((skill) =>
        skill.placesUsed.includes(props.companyName),
      ).map((filteredSkill) => (
        <div className="" key={filteredSkill.name}>
          <span
            title={filteredSkill.name}
            className="text-3xl"
            style={{ color: filteredSkill.color }}
          >
            {filteredSkill.icon}
          </span>
        </div>
      ))}
    </div>
  )
}
