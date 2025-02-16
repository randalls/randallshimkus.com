import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Magnetic } from './ui/magnetic'
import { FormEventHandler, useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'

type FormData = {
  fromName: string
  fromEmail: string
  message: string
}

const sendEmail = async (
  formData: FormData,
  serviceId: string,
  templateId: string,
  userId: string,
) => {
  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: userId,
    template_params: {
      from_name: formData.fromName,
      from_email: formData.fromEmail,
      message: formData.message,
    },
  }
  try {
    //use emailjs api to send the form data async
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch (e) {
    console.log('error sending to emailjs')
    console.log(e)
  }
}

type FormState = 'error' | 'idle' | 'submitting' | 'success'

export function EmailDialog() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const serviceId = process.env.EMAILJS_SERVICEID!
    const templateId = process.env.EMAILJS_TEMPLATEID!
    const userId = process.env.EMAILJS_KEY!
    const formData = new FormData(e.currentTarget)
    const payload = {
      fromName: formData.get('fromName')?.toString() || '',
      fromEmail: formData.get('fromEmail')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    }
    try {
      setFormState('submitting')
      await sendEmail(payload, serviceId, templateId, userId).then(() => {
        setFormState('success')
        console.log('email sent successfully!')
        setTimeout(() => {
          setFormState('idle')
          handleOpenState()
        }, 1000)
      })
    } catch (e) {
      setFormState('error')
    }
  }
  let svg = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
    >
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )

  const handleOpenState = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true)
  }

  const disabled = formState === 'submitting' || formState === 'success'
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={handleOpenState}>
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
          <DialogTrigger className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm font-normal text-zinc-900 transition-colors duration-200 hover:cursor-pointer hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
            Email Me
            {svg}
          </DialogTrigger>
        </Magnetic>
        <DialogContent className="w-full max-w-md p-6 shadow-[0_4px_12px_#0000001a] backdrop:bg-white/80 backdrop:backdrop-blur-xs">
          <DialogHeader>
            <DialogTitle className="text-zinc-900 dark:text-zinc-100">
              Thanks for reaching out
            </DialogTitle>
            <DialogDescription className="text-zinc-700 dark:text-zinc-300">
              It's nice to meet you!
            </DialogDescription>
          </DialogHeader>
          {/* <EmailForm /> */}
          <div className="relative flex flex-col rounded-xl bg-transparent">
            <form className="mt-8 mb-2 w-80" onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col gap-6">
                <div className="w-full">
                  <label className="mb-2 block text-sm text-zinc-700 dark:text-zinc-300">
                    Your Name
                  </label>
                  <input
                    autoComplete="name"
                    className="ease w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm text-zinc-900 shadow-sm transition duration-300 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-400 focus:shadow focus:outline-none dark:text-zinc-100"
                    disabled={disabled}
                    maxLength={100}
                    name="fromName"
                    placeholder="Your Name"
                    required
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block text-sm text-zinc-700 dark:text-zinc-300">
                    Your Email
                  </label>
                  <input
                    autoComplete="email"
                    className="ease w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm text-zinc-900 shadow-sm transition duration-300 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-400 focus:shadow focus:outline-none dark:text-zinc-100"
                    disabled={disabled}
                    maxLength={100}
                    name="fromEmail"
                    placeholder="john@johntoblerone.com"
                    required
                    type="email"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block text-sm text-zinc-700 dark:text-zinc-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="ease w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm text-zinc-900 shadow-sm transition duration-300 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-400 focus:shadow focus:outline-none dark:text-zinc-100"
                    rows={8}
                  ></textarea>
                </div>
              </div>
              <button
                className="mt-4 w-full rounded-md border border-transparent bg-zinc-900 px-4 py-2 text-center text-sm text-zinc-100 shadow-md transition-all hover:cursor-pointer hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-none active:bg-zinc-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:border-zinc-100"
                title="Send"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div
            className="w-full"
            style={
              formState === 'success'
                ? {
                    visibility: 'visible',
                  }
                : { visibility: 'hidden' }
            }
          >
            <p className="text-green">
              <FcCheckmark /> Your email was sent successfully!
            </p>
          </div>
          <DialogClose />
        </DialogContent>
      </Dialog>
    </div>
  )
}
