import { GlowEffect } from './ui/glow-effect'
import { ReactNode } from 'react'
// import { Magnetic } from './ui/magnetic'
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon'
import { ChevronDoubleDownIcon } from '@/components/icons/ChevronDoubleDownIcon'
import { ChevronTripleDownIcon } from '@/components/icons/ChevronTripleDownIcon'
import { ChevronUpIcon } from '@/components/icons/ChevronUpIcon'
import { ChevronDoubleUpIcon } from '@/components/icons/ChevronDoubleUpIcon'
import { ChevronTripleUpIcon } from '@/components/icons/ChevronTripleUpIcon'
import './skill-card.css'

const EXPERIENCE_LEVELS = {
  [0]: {
    Icon: ChevronUpIcon,
    description: 'Beginner',
  },
  [1]: {
    Icon: ChevronDoubleUpIcon,
    description: 'Intermediate',
  },
  [2]: {
    Icon: ChevronTripleUpIcon,
    description: 'Advanced',
  },
  [3]: {
    Icon: ChevronUpIcon,
    description: 'Expert',
  },
}

const USAGE = {
  [-1]: {
    Icon: ChevronDownIcon,
    description: "I haven't used this in the last year",
  },
  [-2]: {
    Icon: ChevronDoubleDownIcon,
    description: "I haven't used this in the last two years",
  },
  [-3]: {
    Icon: ChevronTripleDownIcon,
    description: "I haven't used this in the last five years",
  },
  1: {
    Icon: ChevronUpIcon,
    description: "I've used this it the last year",
  },
  2: {
    Icon: ChevronDoubleUpIcon,
    description: "I've been using this recently",
  },
  3: {
    Icon: ChevronTripleUpIcon,
    description: "I've been using this everyday",
  },
}

type SkillCardProps = {
  name: string
  level: 0 | 1 | 2 | 3
  usage: -1 | -2 | -3 | 1 | 2 | 3
  icon: ReactNode
  color: string
  alternateColor: string
  invertColors: boolean
}

export function SkillCard(props: SkillCardProps) {
  const { Icon: ExpIcon, description: expDescription } =
    EXPERIENCE_LEVELS[props.level]
  const { Icon, description: usageDescription } = USAGE[props.usage]
  return (
    // <Magnetic>
    <div className="skillCard rounded-lg border shadow-sm">
      <GlowEffect
        colors={[props.color, props.color, props.color, props.color]}
        mode="static"
        blur="soft"
      />
      <div className="relative rounded-lg bg-white dark:bg-zinc-950">
        <div className="flex justify-between p-4">
          <div>
            <h3 className="text-lg font-semibold">{props.name}</h3>
          </div>
          <div className="icon" style={{ color: props.color }}>
            {props.icon}
          </div>
        </div>
        <div
          className="meta mt-4 grid grid-cols-2 text-white"
          style={{ backgroundColor: `${props.color}` }}
        >
          <div style={{ borderRight: 'solid 1px' }}>
            <p className="font-bold">EXP LVL</p>
            <p title={expDescription}>
              <ExpIcon aria-label={expDescription} />
            </p>
          </div>
          <div>
            <p className="font-bold">USAGE</p>
            <p title={usageDescription}>
              <Icon aria-label={usageDescription} />
            </p>
          </div>
        </div>
      </div>
    </div>
    // </Magnetic>
  )
}
