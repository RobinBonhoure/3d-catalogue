const fs = require('fs');
const iconv = require('iconv-lite');

// Define the input and output file paths
const inputFile = './node/model.jsx'; // Replace with your input file path
const outputFile = './node/new_model.jsx'; // Replace with your output file path

// Read the input file with encoding 'binary'
fs.readFile(inputFile, 'binary', (err, buffer) => {
    if (err) {
        console.error('Error reading the input file:', err);
        return;
    }

    // Convert the binary data to a UTF-8 string
    const data = iconv.decode(Buffer.from(buffer, 'binary'), 'utf-8');

    // Regular expression to find the mesh tags with material name (with the 'u' flag)
    const meshRegex1 = /<mesh\s+geometry={nodes\.(\w+)\.geometry}\s+material={materials\.(\w+|\['\w+'\])}\s*(.*?)\s*\/>/g;
    const meshRegex2 = /<mesh\s+geometry={nodes\.(\w+)\.geometry}\s+material={materials\['([\w.]+)'\]}\s*(.*?)\s*\/>/g;


    // Process each match and add new lines of attributes inside the mesh tag
    const updatedData = data
        .replace(meshRegex1, (match, meshName, materialName, otherParams) => {
            // Remove single quotes if present around the material name
            materialName = materialName.replace(/'/g, '');
            return `<mesh geometry={nodes.${meshName}.geometry} material={materials.${materialName}} ${otherParams}
                    material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.material)].aoMap}
                    material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.material)].roughnessMap}
                    material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.material)].normalMap}
                    material-map={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.material)].baseColorMap}
                    material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.material)].metalnessMap}
                    material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.material)].metalness}
                    material-color={useSelector((state) => state.modelCustomization.items.${materialName}.color)}
                />`;
        })
        .replace(meshRegex2, (match, meshName, materialName, otherParams) => {
            return `<mesh geometry={nodes.${meshName}.geometry} material={materials['${materialName}']} ${otherParams}
                    material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['${materialName}'].material)].aoMap}
                    material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['${materialName}'].material)].roughnessMap}
                    material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['${materialName}'].material)].normalMap}
                    material-map={allMaterials[useSelector((state) => state.modelCustomization.items['${materialName}'].material)].baseColorMap}
                    material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['${materialName}'].material)].metalnessMap}
                    material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['${materialName}'].material)].metalness}
                    material-color={useSelector((state) => state.modelCustomization.items['${materialName}'].color)}
                />`;
        });

    // Encode the updated data back to binary
    const updatedBuffer = iconv.encode(updatedData, 'utf-8');

    // Write the updated binary data to the output file
    fs.writeFile(outputFile, updatedBuffer, (err) => {
        if (err) {
            console.error('Error writing the output file:', err);
        } else {
            console.log('Script completed successfully. Output file:', outputFile);
        }
    });
});
