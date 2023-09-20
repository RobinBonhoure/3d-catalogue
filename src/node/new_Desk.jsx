
<Resize
ref={ref} scale={2}>
<Center>
    <group
        dispose={null}
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => dispatch(setCurrent(null))}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
        {...dragBind()}
    >
        <group rotation={[Math.PI / 2, 0, 0]}>
            
        <mesh geometry={nodes.Object_4.geometry} material={materials.comp_desk_c}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].baseColorMap}
        />
      
            
        <mesh geometry={nodes.Object_5.geometry} material={materials.comp_desk}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].baseColorMap}
        />
      
            
        <mesh geometry={nodes.Object_6.geometry} material={materials.comp_desk_b}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].baseColorMap}
        />
      
            
        <mesh geometry={nodes.Object_7.geometry} material={materials.comp_desk_a}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].baseColorMap}
        />
      
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
            
        <mesh geometry={nodes.Object_10.geometry} material={materials.comp_desk_2remote}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].baseColorMap}
        />
      
            
        <mesh geometry={nodes.Object_11.geometry} material={materials.comp_desk_1remote}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].baseColorMap}
        />
      
            
        <mesh geometry={nodes.Object_12.geometry} material={materials.comp_desk_button}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].baseColorMap}
        />
      
            
        <mesh geometry={nodes.Object_9.geometry} material={materials.comp_desk_remote}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].baseColorMap}
        />
      
        </group>
        
        <mesh geometry={nodes.Object_14.geometry} material={materials.comp_desk_top}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].aoMap}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].roughnessMap}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].normalMap}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].baseColorMap}
        />
      
    </group>
</Center>
</Resize>