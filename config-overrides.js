const { compose } = require('react-app-rewired');
const {rewireWorkboxInject, defaultInjectConfig} = require('react-app-rewire-workbox');
const path = require('path');
const sourceDir = process.env.SOURCE || 'src';

console.log("sourceDir =>", sourceDir);

module.exports = config => ({
  ...config,
  resolve: {
     ...config.resolve,
     modules: ['node_modules', sourceDir],
  },
});

module.exports  = (config, env) => {
  console.log("Env: ", env);
  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    const workboxConfig = {
      ...defaultInjectConfig,
      swSrc: path.join(__dirname, 'src', 'custom-sw.js')
    };
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  return config;
};

;