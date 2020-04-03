const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')
const outPutFn = config => {
    const path = require('path');
    const paths = require('react-scripts/config/paths');
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');
    // config.output.path = path.join(path.dirname(config.output.path), 'dist');
    return config;
}
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    outPutFn(),
    //设置别名
    addWebpackAlias({
        "@": path.resolve(__dirname, "src"),
        "@config": path.resolve(__dirname, "src/config"),
        "@api": path.resolve(__dirname, "src/api"),
        "@store": path.resolve(__dirname, "src/store"),
        "@views": path.resolve(__dirname, "src/views"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@components": path.resolve(__dirname, "src/components"),
        "@static": path.resolve(__dirname, "src/static")
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1890ff' }, //#1890ff '#1DA57A'
    }),
);