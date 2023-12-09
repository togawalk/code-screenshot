import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function Sidebar() {
  return (
    <aside className='w-80 flex flex-col fixed bg-card top-0 bottom-0 border'>
      <div className='p-4'>
        <fieldset className='flex items-center justify-between px-4'>
          <Label htmlFor='show-title-bar'>Title Bar</Label>
          <Switch id='show-title-bar' />
        </fieldset>
      </div>
    </aside>
  )
}
