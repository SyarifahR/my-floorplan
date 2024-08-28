module.exports = function override(config, env) {
    // Find the source-map-loader and exclude @mediapipe/tasks-vision
    const sourceMapLoader = config.module.rules.find(rule => 
      rule.loader && rule.loader.includes('source-map-loader')
    );
  
    if (sourceMapLoader) {
      sourceMapLoader.exclude = [/node_modules\/@mediapipe\/tasks-vision/];
    }
  
    return config;
  };
  