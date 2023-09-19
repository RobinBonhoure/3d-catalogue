import { useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const DataMaterials = () => {
  const materials = {
    default: {
      aoMap: useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/wood/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/wood/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/wood/baseColor.jpg'),
    },
    wood: {
      aoMap: useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/wood/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/wood/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/wood/baseColor.jpg'),
    },
  };
  return (
    materials
  )
};

export default DataMaterials;