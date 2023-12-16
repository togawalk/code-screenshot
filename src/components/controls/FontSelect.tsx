import { fonts } from '@/config/fonts'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import useStore from '@/store'
import { Label } from '@/components/ui/label'

export default function FontSelect() {
  const fontStyle = useStore((state) => state.fontStyle)

  return (
    <div className='flex items-center justify-between'>
      <Label className='text-muted-foreground'>Font</Label>
      <Select
        value={fontStyle}
        onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
      >
        <SelectTrigger className='w-40'>
          <SelectValue placeholder='Select Font' />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(fonts).map(([id, font]) => (
            <SelectItem key={id} value={id}>
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
