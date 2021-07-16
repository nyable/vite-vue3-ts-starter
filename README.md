# Dependency
1. Vite
2. Vue 3
3. Typescript
4. Pinia
5. Element Plus
6. Vue Router 4
7. SASS
8. Axios  

This template should help get you started developing with Vue 3,Typescript,Element Plus,etc in Vite.
## How to use?
1. Git clone or download or run `npx degit nyable/vite-vue3-ts-starter#master my-project`
2. `cd my-project` and `npm install`  
3. `npm run dev`
> If an error '-4058' occurs after `npm run dev`,the reason maybe npm version > 7.0 and use `taobao` or `cnpm` registry, please run `node node_modules/esbuild/install.js` before `npm run dev`,or delete `node_modules`,`package-lock.json` and run `npm install` again.

# Other
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
