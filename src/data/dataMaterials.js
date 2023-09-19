import { useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const DataMaterials = () => {
  const materials = {
    fabric: {
      aoMap: useLoader(TextureLoader, 'materials/fabric/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/fabric/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/fabric/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/fabric/baseColor.jpg'),
    },
    wood: {
      aoMap: useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/wood/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/wood/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/wood/baseColor.jpg'),
    },
    metal: {
      aoMap: useLoader(TextureLoader, 'materials/metal/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/metal/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/metal/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/metal/baseColor.jpg'),
      metalnessMap: useLoader(TextureLoader, 'materials/metal/metallic.jpg'),
    },
  };
  return (
    materials
  )
};

export default DataMaterials;