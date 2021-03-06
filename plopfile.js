module.exports = plop => {
    plop.setHelper('hump', function (text) {
        return text.replace(text[0], text[0].toUpperCase())
    })
    plop.setGenerator('component', {
        description: '生成组件',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '请输入组件名？'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'packages/{{name}}/__tests__/{{name}}.spec.ts',
                templateFile: 'templates/__tests__/index.spec.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/src/main.ts',
                templateFile: 'templates/src/main.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/.gitignore',
                templateFile: 'templates/.gitignore'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/src/Index.vue',
                templateFile: 'templates/src/Index.vue'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/package.json',
                templateFile: 'templates/package.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/README.md',
                templateFile: 'templates/README.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/typings/huskie-ui.d.ts',
                templateFile: 'templates/typings/huskie-ui.d.ts'
            },
            {
                type: 'append',
                path: 'vuepress/.vuepress/clientAppEnhance.ts',
                pattern: /(\/\/ -- APPSTART ITEMS HERE --)/gi,
                template: "import H{{hump name}} from '@huskie-ui/{{name}}'"
            },
            {
                type: 'append',
                path: 'vuepress/.vuepress/clientAppEnhance.ts',
                pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
                template: "app.component('H{{hump name}}', H{{hump name}})"
            }
        ]
    })
}
