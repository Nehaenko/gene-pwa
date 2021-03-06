const config = {
    parser: 'babel-eslint',
    extends: ['@magento'],
    rules: {
        'no-prototype-builtins': 'off',
        'no-undef': 'off',
        'no-useless-escape': 'off',
        'object-curly-spacing': ['error', 'always']
    }
};

module.exports = config;
