import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group, Mesh } from 'three'

const Shapes = () => {
  const cubeRef = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)

  useFrame((_state, delta) => {
    if (cubeRef?.current?.rotation) {
      cubeRef.current.rotation.y = cubeRef.current?.rotation.y + delta
    }
    if (groupRef?.current?.rotation) {
      groupRef.current.rotation.y = groupRef.current?.rotation.y + delta
    }
  })
  return (
    <>
      <group ref={groupRef}>
        <mesh rotation-y={Math.PI * 0.25} position-x={-2} scale={1}>
          <sphereGeometry />
          <meshBasicMaterial color='orange' />
        </mesh>
        <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshBasicMaterial color='mediumpurple' />
        </mesh>
      </group>
      <mesh scale={10} position-y={-2} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshBasicMaterial color='greenyellow' />
      </mesh>
    </>
  )
}

export default Shapes
