import { ReactNode } from 'react'

export default function SettingsGroup({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <div className='space-y-2 px-4'>
      <p className='font-semibold py-3'>{title}</p>
      <div className='space-y-6'>{children}</div>
    </div>
  )
}
