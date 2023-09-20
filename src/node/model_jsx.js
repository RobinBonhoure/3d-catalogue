const fs = require('fs');

// Define the input and output file paths
const inputFile = 'src/node/Desk.jsx'; // Replace with your input file path
const outputFile = 'src/node/new_Desk.jsx'; // Replace with your output file path

// Read the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the input file:', err);
      return;
    }
  
    // Regular expression to find and replace mesh elements with added attributes
    const meshRegex = /<mesh\s+geometry={nodes\.(\w+)\.geometry}\s+material={materials\.(\w+)}[^>]*\/>/g;
  
    // Process each match and add attributes within the mesh tag
    const updatedData = data.replace(meshRegex, (match, meshName, materialName) => {
      return `
        <mesh geometry={nodes.${meshName}.geometry} material={materials.${materialName}}
          material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.aoMap)]}
          material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.roughnessMap)]}
          material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.normalMap)]}
          material-map={allMaterials[useSelector((state) => state.modelCustomization.items.${materialName}.baseColorMap)]}
        />
      `;
    });
  
    // Write the updated data to the output file
    fs.writeFile(outputFile, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the output file:', err);
      } else {
        console.log('Script completed successfully. Output file:', outputFile);
      }
    });
  });