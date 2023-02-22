import { lazy } from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

const Scene = lazy(() => import('~/components/canvas/scene'))
const Layout = lazy(() => import('~/components/dom/layout'))

interface CanvasContext {
  canvas: React.ReactNode | null
  setCanvas: React.Dispatch<React.SetStateAction<React.ReactNode | null>>
}

const Canvas = createContext<CanvasContext>({
  canvas: null,
  setCanvas: () => {},
})

export const useCanvas = (canvas: React.ReactNode | null) => {
  const { setCanvas } = useContext(Canvas)

  useEffect(() => {
    setCanvas(canvas)

    return () => {
      setCanvas(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

const Root = () => {
  const ref = useRef(null)
  const [canvas, setCanvas] = useState<React.ReactNode | null>(null)

  return (
    <Canvas.Provider value={{ canvas, setCanvas }}>
      {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
       * Setting the event source to a shared parent allows both the dom and the canvas to receive events. */}
      <Layout ref={ref}>
        <Scene eventSource={ref}>{canvas}</Scene>
        <Outlet />
      </Layout>
    </Canvas.Provider>
  )
}

export default Root
