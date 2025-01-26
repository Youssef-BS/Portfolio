import { MeshDistortMaterial , Sphere } from '@react-three/drei'
import React from 'react'
import { AmbientLight, DirectionalLight } from 'three'


const Shape = () => {
  return (
    <>
    <Sphere args={[1 , 100 , 200]} scale={2.4} >
        <MeshDistortMaterial color='pink' 
        attach="material"
        distort={0.5}
        speed={2}
        />
    </Sphere>
    <ambientLight intensity={1} />
    <directionalLight position={[1, 2, 3]} />
    </>
  )
}

export default Shape