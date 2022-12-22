import React ,{Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from'@react-three/drei'
import Scene from '../../Scene'
function CarEx() {
  return (
    <Canvas>
        <Suspense fallback={null}>
            <ambientLight />
            <OrbitControls />
            <Scene />
        </Suspense>
        
    </Canvas>
  )
}

export default CarEx