import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import SettingsGroup from './SettingsGroup'
import FontSelect from './controls/FontSelect'
import ThemeSelect from './controls/ThemeSelect'

export default function Sidebar() {
  return (
    <aside className='w-80 flex flex-col fixed bg-card top-0 bottom-0 border'>
      <SettingsGroup title='Editor'>
        <fieldset className='flex items-center justify-between'>
          <Label htmlFor='show-background' className='text-muted-foreground'>
            Background
          </Label>
          <Switch id='show-background' />
        </fieldset>
        <FontSelect />
        <ThemeSelect />
        <fieldset className='flex items-center justify-between'>
          <Label htmlFor='show-title-bar' className='text-muted-foreground'>
            Title Bar
          </Label>
          <Switch id='show-title-bar' />
        </fieldset>
        <fieldset className='flex items-center justify-between'>
          <Label htmlFor='show-trafic-lights' className='text-muted-foreground'>
            Trafic Lights
          </Label>
          <Switch id='show-trafic-lights' />
        </fieldset>
      </SettingsGroup>
    </aside>
  )
}
