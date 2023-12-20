import { themes } from '@/config/themes'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import useStore from '@/store'
import { Label } from '@/components/ui/label'

export default function ThemeSelect() {
  const theme = useStore((state) => state.theme)

  return (
    <div className='flex items-center justify-between'>
      <Label className='text-muted-foreground'>Theme</Label>
      <Select
        value={theme}
        onValueChange={(theme) => useStore.setState({ theme })}
      >
        <SelectTrigger className='w-40'>
          <SelectValue placeholder='Select Theme' />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(themes).map(([id, theme]) => (
            <SelectItem key={id} value={id}>
              {theme.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
