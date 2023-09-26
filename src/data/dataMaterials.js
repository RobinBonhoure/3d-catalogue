import { useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const DataMaterials = () => {
  const materials = {
    wood: {
      aoMap: useLoader(TextureLoader, './images/wood/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, './images/wood/roughness.jpg'),
      normalMap: useLoader(TextureLoader, './images/wood/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, './images/wood/basecolor.jpg'),
      metalnessMap: null,
      metalness: 0,
    },
    metal: {
      aoMap: useLoader(TextureLoader, './images/metal/ambientOcclusion.jpg'),
      roughnessMap: useLoader(TextureLoader, './images/metal/roughness.jpg'),
      normalMap: useLoader(TextureLoader, './images/metal/normal.jpg'),
      baseColorMap: useLoader(TextureLoader, './images/metal/basecolor.jpg'),
      metalnessMap: useLoader(TextureLoader, './images/metal/metallic.jpg'),
      metalness: 1,
    },
  };
  return (
    materials
  )
};

export default DataMaterials;