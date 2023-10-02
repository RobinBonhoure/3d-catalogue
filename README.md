This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## How to compress assets and turn them into JSX components

1. npx gltf-pipeline -i model.gltf -o model.glb --draco.compressionLevel=7
2. npx gltfjsx model.glb


## How to include them in your project

1. Put model.glb into /public
2. Put Model.js (the output of gltfjsx) anywhere inside /src

## How to modify with node the jsx

1. Put model.jsx into /node
2. node ./node/model_jsx.js   

## How to get partsMaterials

1. Put model.jsx into /node
2. node ./node/parts_materials.js   