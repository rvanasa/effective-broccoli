module.exports = {
    basePath: __dirname,
    verbose: true,
    env: 'prod',
    packages: [{
        path: '/src',
    }, {
        name: 'External Resources',
        include: {
            Config: (env) => require('./config/' + env + '.config'),
            Webpack: () => require('webpack')(require('./webpack.config')),
        },
    }],
};