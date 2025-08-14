import { Linkedin, Twitter, Facebook } from "lucide-react"

export function SocialRail() {
  const iconCls = "h-5 w-5"
  const itemCls =
    "grid place-items-center h-9 w-9 rounded-md border bg-background shadow-soft hover:shadow transition"
  return (
    <div className="hidden lg:flex flex-col gap-3 fixed left-4 top-40">
      <a className={itemCls} href="#" aria-label="Facebook"><Facebook className={iconCls} /></a>
      <a className={itemCls} href="#" aria-label="Twitter"><Twitter className={iconCls} /></a>
      <a className={itemCls} href="#" aria-label="LinkedIn"><Linkedin className={iconCls} /></a>
    </div>
  )
}
