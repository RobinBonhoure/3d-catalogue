import { useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const DataMaterials = () => {
  const materials = {
    gravel: {
      aoMap: useLoader(TextureLoader, 'materials/gravel/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/gravel/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/gravel/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/gravel/baseColor.jpg'),
      diplacementMap: useLoader(TextureLoader, 'materials/gravel/height.png'),
      metalnessMap: null,
      metalness: 0,
    },
    fabric: {
      aoMap: useLoader(TextureLoader, 'materials/fabric/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/fabric/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/fabric/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/fabric/baseColor.jpg'),
      metalnessMap: null,
      metalness: 0,
    },
    wood: {
      aoMap: useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/wood/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/wood/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/wood/baseColor.jpg'),
      metalnessMap: null,
      metalness: 0,
    },
    metal: {
      aoMap: useLoader(TextureLoader, 'materials/metal/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, 'materials/metal/roughness.jpg'),
      normalMap: useLoader(TextureLoader, 'materials/metal/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, 'materials/metal/baseColor.jpg'),
      metalnessMap: useLoader(TextureLoader, 'materials/metal/metallic.jpg'),
      metalness: 1,
    },
  };
  return (
    materials
  )
};

export default DataMaterials;