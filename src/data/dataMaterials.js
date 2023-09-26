import { useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const DataMaterials = () => {
  const materials = {
    wood: {
      aoMap: useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/wood/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/wood/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/wood/basecolor.jpg'),
      metalnessMap: null,
      metalness: 0,
    },
    metal: {
      aoMap: useLoader(TextureLoader, 'materials/metal/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/metal/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/metal/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/metal/basecolor.jpg'),
      metalnessMap: useLoader(TextureLoader, 'materials/metal/metallic.jpg'),
      metalness: 1,
    },
  };
  return (
    materials
  )
};

export default DataMaterials;