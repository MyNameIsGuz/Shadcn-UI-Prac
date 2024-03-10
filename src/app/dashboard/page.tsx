import { cookies } from "next/headers"
import Image from "next/image"

import { Mail } from "@/app/dashboard/components/mail"
import { accounts, mails } from "@/app/dashboard/data"

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  // Parse JSON cookies
  const parseJSON = (value: string) => {
    try {
      return JSON.parse(value)
    } catch (error) {
      return undefined
    }
  }

  const defaultLayout = layout ? parseJSON(layout.value) : undefined
  const defaultCollapsed = collapsed ? parseJSON(collapsed.value) : undefined

  return (
    <>
      <div className="md:hidden">
        {/* <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        /> */}
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
