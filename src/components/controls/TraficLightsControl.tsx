import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import useStore from '@/store'

export const TraficLightsControl = () => {
  const showTraficLights = useStore((state) => state.showTraficLights)

  return (
    <fieldset className='flex items-center justify-between min-h-[36px]'>
      <Label htmlFor='show-trafic-lights' className='text-muted-foreground'>
        Trafic Lights
      </Label>
      <Switch id='show-trafic-lights' 
        checked={showTraficLights}
        onCheckedChange={(checked) =>
          useStore.setState({ showTraficLights: checked })
        }

      />
    </fieldset>
  )
}
