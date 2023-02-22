import { lazy } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Instructions from '~/components/dom/instructions'
import { useCanvas } from '~/pages/root'

const Shapes = lazy(() => import('~/components/canvas/shapes'))

const Examples = () => {
  useCanvas(<Shapes />)
  return (
    <Instructions>
      Here are some examples:
      <div>
        <Link to='/examples/starter'>- Starter</Link>
      </div>
      <div>
        <Link to='/examples/carousel'>- Carousel</Link>
      </div>
      <Outlet />
    </Instructions>
  )
}

export default Examples
