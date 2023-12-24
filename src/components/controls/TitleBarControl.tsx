import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import useStore from '@/store'

export const TitleBarControl = () => {
  const showTitleBar = useStore((state) => state.showTitleBar)
  return (
    <fieldset className='flex items-center justify-between min-h-[36px]'>
      <Label htmlFor='show-title-bar' className='text-muted-foreground'>
        Title Bar
      </Label>
      <Switch
        id='show-title-bar'
        checked={showTitleBar}
        onCheckedChange={(checked) =>
          useStore.setState({ showTitleBar: checked })
        }
      />
    </fieldset>
  )
}
