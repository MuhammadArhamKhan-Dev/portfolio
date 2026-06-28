import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import styles from './Hero.module.css'

// separate component for the 3D object
const Icosahedron = () => {
    const meshRef = useRef()

    useFrame(({clock}) => {
        meshRef.current.rotation.x += 0.003
        meshRef.current.rotation.y += 0.005
        meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
    })

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2, 0]} />
            <meshBasicMaterial color="#00ff88" wireframe />
        </mesh>
    )
}

const Scene = () => {
    return (
        <Canvas className={styles.canvas}>
            <Icosahedron />
        </Canvas>
    )
}

export default Scene