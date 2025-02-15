import type { MDXComponents } from 'mdx/types'
import { Tilt } from '@/components/ui/tilt'
import { Spotlight } from '@/components/ui/spotlight'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <div className="aspect-video">
          <Tilt
            rotationFactor={6}
            isRevese
            style={{ transformOrigin: 'center center' }}
            springOptions={{ stiffness: 26.7, damping: 4.1, mass: 0.2 }}
            className="group relative"
          >
            <Spotlight
              className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
              size={248}
              springOptions={{ stiffness: 26.7, damping: 4.1, mass: 0.2 }}
            />
            <figure>
              <img
                src={src}
                alt={alt}
                className="rounded-xl object-cover grayscale duration-700 group-hover:grayscale-0"
              />
              <figcaption className="text-center">{caption}</figcaption>
            </figure>
          </Tilt>
        </div>
      )
    },
  }
}
