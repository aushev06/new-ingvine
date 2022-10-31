const plugins = [
    [
        'babel-plugin-direct-import',
        {modules: ['@mui/material', '@mui/icons-material']},
    ],
    [
        'babel-plugin-import',
        {
            libraryName: '@mui/material',
            libraryDirectory: '',
            camel2DashComponentName: false,
        },
        'core',
    ],
    [
        'babel-plugin-import',
        {
            libraryName: '@mui/icons-material',
            libraryDirectory: '',
            camel2DashComponentName: false,
        },
        'icons',
    ],
];

module.exports = {plugins};
