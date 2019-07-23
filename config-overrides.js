const {rewireWorkboxInject, defaultInjectConfig} = require('react-app-rewire-workbox');
const path = require('path');

module.exports = function override(config, env) {
  console.log("Env: ", env);
  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    console.log(path.join(__dirname, 'src', 'custom-sw.js'));
    const workboxConfig = {
  //    ...defaultInjectConfig,
  //    swSrc: path.join(__dirname, 'src', 'custom-sw.js')
  ...defaultInjectConfig,
  swSrc: path.join(__dirname, "src", "custom-sw.js"),
  importWorkboxFrom: "local" // Add this propertie
    };
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  return config;
};