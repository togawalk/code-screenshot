import { ReactNode } from 'react'

export default function SettingsGroup({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <div className='space-y-2 px-5'>
      <p className='font-semibold'>{title}</p>
      <div className='space-y-3'>{children}</div>
    </div>
  )
}
