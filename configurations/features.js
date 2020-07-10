const path = require('path');

function get(package) {
    const { name, version } = require(path.join(package, 'package.json'));

    return {
        [name]: {
            contentBase: path.join(package, '/dist/bundle'),
            publicPath: `/packages/${name}/`,
            cdn: `https://unpkg.com/${name}@${version}/dist/bundle/`,
        },
    };
}

module.exports = {
    ...get(path.join(__dirname, '../packages/feature1')),
    ...get(path.join(__dirname, '../packages/feature2')),
    ...get(path.join(__dirname, '../packages/feature3')),
};
