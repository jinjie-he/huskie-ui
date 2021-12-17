module.exports = {
    // ATTENTION!!
    // Preset ordering is reversed, so `@babel/typescript` will called first
    // Do not put `@babel/typescript` before `@babel/env`, otherwise will cause a compile error
    // See https://gitee.com/junjie826/huskie-ui.git
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@babel/typescript',
            {
                isTSX: true,
                allExtensions: true
            }
        ]
    ],
    plugins: ['@babel/transform-runtime'],
    env: {
        utils: {
            ignore: ['**/*.test.ts', '**/*.spec.ts'],
            presets: [
                [
                    '@babel/env',
                    {
                        loose: true,
                        modules: false
                    }
                ]
            ]
        }
    }
}
