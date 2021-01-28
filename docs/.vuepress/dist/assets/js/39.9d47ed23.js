(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{546:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eslint-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-规范"}},[t._v("#")]),t._v(" ESLint 规范")]),t._v(" "),a("h2",{attrs:{id:"在原生-js-项目中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在原生-js-项目中使用"}},[t._v("#")]),t._v(" 在原生 js 项目中使用")]),t._v(" "),a("ol",[a("li",[t._v("通过命令 "),a("code",[t._v("npm install eslint --save-dev")]),t._v(" 在项目中安装 ESLint，或通过命令 "),a("code",[t._v("npm install eslint -g")]),t._v(" 在全局安装")]),t._v(" "),a("li",[t._v("引入公司规范文件中的默认配置 "),a("code-link",{attrs:{href:"/eslint/eslint-defaults.js"}},[t._v("eslint-defaults.js")]),t._v("，并重命名为 "),a("code",[t._v(".eslintrc.js")])],1),t._v(" "),a("li",[t._v("整个项目代码格式化可使用命令 "),a("code",[t._v("npx eslint --fix")])])]),t._v(" "),a("h2",{attrs:{id:"在-vue-项目中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-vue-项目中使用"}},[t._v("#")]),t._v(" 在 Vue 项目中使用")]),t._v(" "),a("h3",{attrs:{id:"新项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新项目"}},[t._v("#")]),t._v(" 新项目")]),t._v(" "),a("ol",[a("li",[t._v("执行 "),a("code",[t._v("vue create myapp")]),t._v(" 通过 vue-cli 创建一个新的项目")]),t._v(" "),a("li",[t._v('选择 "Manually select features" 选项，手动选择需要的功能')]),t._v(" "),a("li",[t._v('保证 "Linter / Formatter" 选项为选中状态')]),t._v(" "),a("li",[t._v('进入 "Pick a linter / formatter config" 选择 linter 配置的步骤时，选择 "ESLint + Standard config"，下一步')]),t._v(" "),a("li",[t._v('选择 "Lint on save"，回车')]),t._v(" "),a("li",[t._v("项目创建后，引入公司规范文件中的默认配置 "),a("code-link",{attrs:{href:"/eslint/eslint-defaults.js"}},[t._v("eslint-defaults.js")]),t._v("，\n并按照 "),a("code-link",{attrs:{href:"/eslint/eslint-vue.js"}},[t._v("eslint-vue.js")]),t._v(" 这个文件的内容覆盖或修改 "),a("code",[t._v(".eslintrc.js")])],1)]),t._v(" "),a("h3",{attrs:{id:"现有项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现有项目"}},[t._v("#")]),t._v(" 现有项目")]),t._v(" "),a("ol",[a("li",[t._v("如果有代码未提交，先执行 "),a("code",[t._v("git commit")]),t._v(" 命令提交代码，因为在安装插件过程中现有代码会被插件修改")]),t._v(" "),a("li",[t._v("首先通过 "),a("code",[t._v("vue add eslint")]),t._v(" 命令安装 ESLint 插件，安装过程中会提示选择 ESLint 配置，选择 "),a("code",[t._v("Standard")]),t._v(" 规范安装")]),t._v(" "),a("li",[t._v("安装完成后，引入公司规范文件中的默认配置 "),a("code-link",{attrs:{href:"/eslint/eslint-defaults.js"}},[t._v("eslint-defaults.js")]),t._v("，\n并按照 "),a("code-link",{attrs:{href:"/eslint/eslint-vue.js"}},[t._v("eslint-vue.js")]),t._v(" 这个文件的内容覆盖或修改 "),a("code",[t._v(".eslintrc.js")])],1)]),t._v(" "),a("h3",{attrs:{id:"整个项目代码格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整个项目代码格式化"}},[t._v("#")]),t._v(" 整个项目代码格式化")]),t._v(" "),a("ul",[a("li",[t._v("执行命令 "),a("code",[t._v("npx vue-cli-service lint")]),t._v(" 即可")])]),t._v(" "),a("h2",{attrs:{id:"在-react-项目中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-react-项目中使用"}},[t._v("#")]),t._v(" 在 React 项目中使用")]),t._v(" "),a("h3",{attrs:{id:"_1-安装eslint到项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装eslint到项目"}},[t._v("#")]),t._v(" 1. 安装eslint到项目")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint --save-dev\n")])])]),a("h3",{attrs:{id:"_2-在项目根目录创建eslint配置文件-eslintrc-js-可以使用下面命令创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在项目根目录创建eslint配置文件-eslintrc-js-可以使用下面命令创建"}},[t._v("#")]),t._v(" 2. 在项目根目录创建ESlint配置文件.eslintrc.js， 可以使用下面命令创建")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("eslint --init\n")])])]),a("p",[t._v("以上选项一路回车即可，这些就是使用的eslint规则，后面可以自定义调整；")]),t._v(" "),a("h3",{attrs:{id:"_3-安装-eslint-plugin-react-等相关依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-eslint-plugin-react-等相关依赖"}},[t._v("#")]),t._v(" 3. 安装 eslint-plugin-react 等相关依赖：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" babel-eslint eslint-plugin-react eslint-plugin-import  --save-dev\n")])])]),a("h3",{attrs:{id:"_4-完整的-eslintrc-js配置文件-参考示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-完整的-eslintrc-js配置文件-参考示例"}},[t._v("#")]),t._v(" 4. 完整的.eslintrc.js配置文件 参考示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es2021"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es6"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:react/recommended"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./eslint-defaults.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parserOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaFeatures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"overrides"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/__tests__/*.{j,t}s?(x)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/tests/unit/**/*.spec.{j,t}s?(x)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.test.js"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-在package-json文件中增加如下脚本指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-在package-json文件中增加如下脚本指令"}},[t._v("#")]),t._v(" 5. 在package.json文件中增加如下脚本指令：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --ext .js --ext .jsx src"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("--ext")]),t._v(" 这个选项允许你指定 ESLint 在指定的目录下查找 JavaScript文件时要使用的文件扩展名。默认情况下，它使用 .js 作为唯一性文件扩展名。")]),t._v(" "),a("h2",{attrs:{id:"vscode-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-配置"}},[t._v("#")]),t._v(" VSCode 配置")]),t._v(" "),a("ol",[a("li",[t._v("安装 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint 插件"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("按快捷键 "),a("code",[t._v("Win + Shift + p")]),t._v(" 输入 setting，选择 "),a("code",[t._v("Preference: Open Settings(JSON)")]),t._v("，打开 JSON 格式的配置文件")]),t._v(" "),a("li",[t._v("在末尾添加以下配置：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"[vue]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dbaeumer.vscode-eslint"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"[javascript]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dbaeumer.vscode-eslint"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"[typescript]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.defaultFormatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dbaeumer.vscode-eslint"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.formatOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.codeActionsOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source.fixAll"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.format.enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("配置含义：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("eslint.format.enable")]),t._v("：使用 ESlint 作为所有由 ESlint 验证的文件的格式化工具")]),t._v(" "),a("li",[a("code",[t._v('"editor.defaultFormatter": "dbaeumer.vscode-eslint"')]),t._v("：指定对应语言的默认格式化工具为我们装的 ESLint 插件")]),t._v(" "),a("li",[a("code",[t._v("editor.codeActionsOnSave")]),t._v("：用于指定当保存代码时需要编辑器执行的动作，里面的值 "),a("code",[t._v('"source.fixAll": true')]),t._v(" 表示为包括 ESLint 的所有插件启用自动修复，\n也可以通过 "),a("code",[t._v('"source.fixAll.eslint": true')]),t._v(" 只开启 ESLint 的自动修复")]),t._v(" "),a("li",[a("code",[t._v("editor.formatOnSave")]),t._v("：保存文件时自动格式化，当启用了 "),a("code",[t._v("editor.codeActionsOnSave")]),t._v(" 时建议关掉 "),a("code",[t._v("editor.formatOnSave")]),t._v("，如果同时打开会导致保存文件时格式化两次")])])])}),[],!1,null,null,null);s.default=e.exports}}]);