module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
    ],
    rules: {
        'no-tabs': 'off',
        indent: ['error', 4],
        'react/prop-types': 0, // 防止在react组件定义中缺少props验证
        "space-before-function-paren": 0, //函数（）前不加空格
    }
}
