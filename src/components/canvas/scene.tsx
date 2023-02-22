import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

interface SceneProps {
  children?: React.ReactNode
  eventSource: React.MutableRefObject<any>
}

const Scene: React.FC<SceneProps & React.RefAttributes<HTMLCanvasElement>> = ({ children, eventSource, ...props }) => {
  // Everything here persists between route changes, only children are swapped
  return (
    <Canvas ref={eventSource} {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}

export default Scene
