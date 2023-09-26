
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
            <mesh geometry={nodes.Object_4.geometry} material={materials.comp_desk_c} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.comp_desk} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.comp_desk_b} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.comp_desk_a} />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.comp_desk_2remote} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.comp_desk_1remote} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.comp_desk_button} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.comp_desk_remote} />
        </group>
        <mesh geometry={nodes.Object_14.geometry} material={materials.comp_desk_top} />
    </group>
</Center>
</Resize>