import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import esbuild from "rollup-plugin-esbuild";

// const alias = {
//     react: "preact/compat",
//     "react-dom": "preact/compat",
//   };
  export const build = {
    assetsInlineLimit: 0,
    minify:'esbuild',
    rollupOptions: {

      plugins: [
        esbuild({
          target: "esnext",
          jsxFactory: "h",
          jsxFragment: "Fragment",
        }),
      ],
    },
  };
export default defineConfig({
  esbuild: {
    target: "esnext",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
   // alias,
    build,
    plugins: [preact({
    //  presets:["@babel/preset-react", "@babel/preset-env"],
    })]
})