import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';

export default {
  prerender: true,
  plugins: [
    greenwoodPluginPostCss({
      extendConfig: true
    })
  ]
};