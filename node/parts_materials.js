const fs = require('fs');

// Define the input and output file paths
const inputFile = './node/model.jsx'; // Replace with your input file path
const outputFile = './node/parts_materials.jsx'; // Replace with your output file path

// Define the object to store material information
const partsMaterials = {};

// Read the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the input file:', err);
    return;
  }

  // Regular expression to find and replace mesh elements with added attributes
  const meshRegex = /<mesh\s+geometry={nodes\.(\w+)\.geometry}\s+material={materials\.(\w+)}[^>]*\/>/g;

  // Process each match and add keys to the partsMaterials object
  data.replace(meshRegex, (match, meshName, materialName) => {
    // Use meshName as the key and set default values
    partsMaterials[materialName] = {
      all: ["'metal'", "'wood'"],
      default: "'metal'", // You can modify this default value as needed
    };
  });

  // Convert the partsMaterials object to a JSON string with desired formatting
  const formattedPartsMaterials = JSON.stringify(partsMaterials, null, 4)
    .replace(/"/g, ''); // Remove double quotes around property names

  // Write the updated partsMaterials object to the output file
  const partsMaterialsCode = `const partsMaterials = ${formattedPartsMaterials};\n\nexport default partsMaterials;`;

  fs.writeFile(outputFile, partsMaterialsCode, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the output file:', err);
    } else {
      console.log('Script completed successfully. Output file:', outputFile);
    }
  });
});
