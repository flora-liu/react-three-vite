import { lazy } from 'react'
import Instructions from '~/components/dom/instructions'
import { useCanvas } from '~/pages/root'

const Logo = lazy(() => import('~/components/canvas/logo'))

const Index = () => {
  useCanvas(<Logo scale={0.5} position-y={-1} />)

  return (
    <Instructions>
      <div>This is the index page</div>
    </Instructions>
  )
}

export default Index
