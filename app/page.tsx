'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextScramble } from '@/components/ui/text-scramble'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { SkillsList } from '@/components/skills-list'
import { SkillsUsedList } from '@/components/skills-used-list'
import { WORK_EXPERIENCE, BLOG_POSTS, EMAIL, SOCIAL_LINKS } from './data'
import { MagneticSocialLink } from '@/components/magnetic-social-link'
import { EmailDialog } from '@/components/email-dialog'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

// function ProjectVideo({ src }: ProjectVideoProps) {
//   return (
//     <MorphingDialog
//       transition={{
//         type: 'spring',
//         bounce: 0,
//         duration: 0.3,
//       }}
//     >
//       <MorphingDialogTrigger>
//         <video
//           src={src}
//           autoPlay
//           loop
//           muted
//           className="aspect-video w-full cursor-zoom-in rounded-xl"
//         />
//       </MorphingDialogTrigger>
//       <MorphingDialogContainer>
//         <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
//           <video
//             src={src}
//             autoPlay
//             loop
//             muted
//             className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
//           />
//         </MorphingDialogContent>
//         <MorphingDialogClose
//           className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
//           variants={{
//             initial: { opacity: 0 },
//             animate: {
//               opacity: 1,
//               transition: { delay: 0.3, duration: 0.1 },
//             },
//             exit: { opacity: 0, transition: { duration: 0 } },
//           }}
//         >
//           <XIcon className="h-5 w-5 text-zinc-500" />
//         </MorphingDialogClose>
//       </MorphingDialogContainer>
//     </MorphingDialog>
//   )
// }

export default function Personal() {
  //const [blogTrigger, setBlogTrigger] = useState(false)
  return (
    <motion.main
      id="main"
      className="mt-30 scroll-mt-80 space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Accomplished software engineering leader with a passion for building
            great products and teams. Veteran of both startup and enterprise
            SaaS, I've worked with various technologies and some truly amazing
            colleagues.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            I have deep experience in domain driven design, architectural
            patterns, and agile methodologies. I love working with people to
            solve real world problems. Fortunately, I've worked in many
            different verticals, both product and customer focused, and have had
            many opportunities to make lasting impacts.
          </p>
        </div>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section> */}

      <motion.section
        id="work"
        className="scroll-mt-40"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <TextScramble
          as="h3"
          className="dark:text-zinc mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100"
          duration={2.4}
        >
          Work
        </TextScramble>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <MorphingDialog
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              key={job.id}
            >
              <MorphingDialogTrigger className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[2px] dark:bg-zinc-600/30">
                <Spotlight
                  className="from-zinc-900 via-zinc-700 to-zinc-500 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="relative h-auto w-[80%] overflow-hidden rounded-2xl bg-zinc-300/30 p-[2px] dark:bg-zinc-600/30">
                  <Spotlight
                    className="from-zinc-900 via-zinc-700 to-zinc-500 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={256}
                  />
                  <div className="relative rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                    <div className="relative mt-12 flex w-full flex-row justify-between">
                      <div>
                        <h4 className="font-normal dark:text-zinc-100">
                          {job.title}
                        </h4>
                        <p className="text-zinc-500 dark:text-zinc-400">
                          {job.company}
                        </p>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {job.start} - {job.end}
                      </p>
                    </div>
                    <div className="relative mt-4 flex max-h-100 w-full flex-row overflow-scroll">
                      <div
                        className="text-zinc-600 dark:text-zinc-400"
                        dangerouslySetInnerHTML={{ __html: job.description }}
                      />
                    </div>
                    <div className="relative mt-4 flex w-full flex-row justify-center">
                      <div className="text-center">
                        <span className="font-normal dark:text-zinc-100">
                          Technologies Used
                        </span>
                        <SkillsUsedList companyName={job.company} />
                      </div>
                    </div>
                  </div>
                  <MorphingDialogClose className="text-zinc-500" />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="scroll-mt-40"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <TextScramble
          as="h3"
          className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100"
          duration={2.4}
        >
          Skills
        </TextScramble>
        <div className="flex-1">
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            I have worked with many different technologies over the course of my
            career. I started in the Microsoft stack early on, but gradually
            expanded my scope to include just about anything that fit the
            current need.
          </p>
        </div>
        <SkillsList />
        {/* <div className="flex-1">
          <p className="dark: mt-8 text-zinc-400 text-zinc-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ex
            accusantium accusamus tempore. Maxime minima quo exercitationem
            quidem unde optio accusamus fuga, nisi voluptates accusantium
            veritatis non saepe officiis magnam.
          </p>
        </div> */}
      </motion.section>

      {/* Blog Section - Top of "Connect" section */}
      <motion.section
        id="connect"
        className="scroll-mt-80"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <TextScramble
          as="h3"
          className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100"
          duration={2.4}
        >
          Blog
        </TextScramble>

        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <TextScramble
          as="h3"
          className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100"
          duration={2.4}
        >
          Connect
        </TextScramble>
        {/* social links */}
        <div className="flex items-center justify-start space-x-3">
          <EmailDialog />
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
