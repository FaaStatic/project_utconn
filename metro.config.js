const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const configDefault = (() => {
  const config = getDefaultConfig(__dirname);
  const { transformer, resolver } = config;

  config.transformer.minifierPath = require.resolve("metro-minify-esbuild");
  config.transformer.minifierConfig = {
    compress: {
      drop_console: true,
    },
  };
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  const projectRoot = __dirname;
  const monorepoRoot = path.resolve(projectRoot, "../..");

  // 1. Watch the local app directory, and only the shared packages (limiting the scope and speeding it up)
  // Note how we change this from `monorepoRoot` to `projectRoot`. This is part of the optimization!

  config.watchFolders = [monorepoRoot];
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(monorepoRoot, "node_modules"),
  ];

  config.resolver.disableHierarchicalLookup = true;

  config.resolver.alias = {
    ...config.resolver.alias,
    "@untr/apps-ut-connect": path.resolve(projectRoot, "./"),
  };
  config.resolver = {
    ...config.resolver,
    sourceExts: [...config.resolver.sourceExts, "css"],
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();

module.exports = withNativeWind(configDefault, { input: "./global.css" });
