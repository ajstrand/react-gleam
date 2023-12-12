import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";

// const alias = {
//     react: "preact/compat",
//     "react-dom": "preact/compat",
//   };

export default defineConfig({
  esbuild: {
    target: "es5",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
    plugins: [preact({
    presets:["@babel/preset-react", "@babel/preset-env"],
    })],
})