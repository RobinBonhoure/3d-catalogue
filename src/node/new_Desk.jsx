
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
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.baseColorMap)]}
        />
      
            
        <mesh geometry={nodes.Object_5.geometry} material={materials.comp_desk}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.baseColorMap)]}
        />
      
            
        <mesh geometry={nodes.Object_6.geometry} material={materials.comp_desk_b}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.baseColorMap)]}
        />
      
            
        <mesh geometry={nodes.Object_7.geometry} material={materials.comp_desk_a}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.baseColorMap)]}
        />
      
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
            
        <mesh geometry={nodes.Object_10.geometry} material={materials.comp_desk_2remote}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.baseColorMap)]}
        />
      
            
        <mesh geometry={nodes.Object_11.geometry} material={materials.comp_desk_1remote}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.baseColorMap)]}
        />
      
            
        <mesh geometry={nodes.Object_12.geometry} material={materials.comp_desk_button}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.baseColorMap)]}
        />
      
            
        <mesh geometry={nodes.Object_9.geometry} material={materials.comp_desk_remote}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.baseColorMap)]}
        />
      
        </group>
        
        <mesh geometry={nodes.Object_14.geometry} material={materials.comp_desk_top}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.baseColorMap)]}
        />
      
    </group>
</Center>
</Resize>