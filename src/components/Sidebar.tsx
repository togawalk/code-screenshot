import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import SettingsGroup from './SettingsGroup'
import {
  FontSelect,
  ThemeSelect,
  TitleBarControl,
  TraficLightsControl,
} from '@/components/controls'

import useStore from '@/store'

export default function Sidebar() {
  const showTitleBar = useStore((state) => state.showTitleBar)
  return (
    <aside className='z-20 w-80 flex flex-col fixed bg-card top-0 bottom-0 border space-y-6 py-4'>
      <SettingsGroup title='Frame'>
        <fieldset className='flex items-center justify-between min-h-[36px]'>
          <Label htmlFor='show-background' className='text-muted-foreground'>
            Background
          </Label>
          <Switch id='show-background' />
        </fieldset>
        <fieldset className='flex items-center justify-between min-h-[36px]'>
          <Label htmlFor='show-background' className='text-muted-foreground'>
            Padding
          </Label>
        </fieldset>
      </SettingsGroup>
      <SettingsGroup title='Editor'>
        <fieldset className='flex items-center justify-between min-h-[36px]'>
          <Label htmlFor='background-blur' className='text-muted-foreground'>
            Background Blur
          </Label>
          <Switch id='background-blur' />
        </fieldset>
        <FontSelect />
        <ThemeSelect />
        <TitleBarControl />
        {showTitleBar && <TraficLightsControl />}
      </SettingsGroup>
    </aside>
  )
}
