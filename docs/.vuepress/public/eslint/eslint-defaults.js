/* eslint-disable */
/**
 * 参考文档
 * 【eslint英文文档】https://eslint.org/docs/user-guide/configuring
 * 【eslint中文文档】http://eslint.cn/docs/rules/
 */

/**
 * eslint有三种使用方式
 * 【1】js代码中通过注释的方式使用
 * 【2】通过package.json的eslintConfig字段设置，eslint会自动搜索项目的package.json文件中的配置
 * 【3】通过配置文件的方式使用，配置文件有多种文件方式，如JavaScript、JSON 或者 YAML等
 */

/**
 * 文件忽略
 * 【】让eslint跳过特定文件的检测
 * 【】通过当前工作目录下 「.eslintignore」 文件进行设置
 *    其使用的是Glob路径书写方式，与「.gitignore」的使用方法相同
 * 【】也可以在 package.json 文件中，通过 eslintIgnore 参数进行设置
 */

/**
 * 文件内局部设置
 * 【】eslint可以具体文件中设置特定代码的规则，常用于跳过某条语句的检测。
 * 【】注销全部规则，在代码前新建一行，添加注销 /* eslint-disable *\/   。如果没有恢复设置的语句，则下列全部代码都会跳过检测。
 * 【】恢复eslint，在代码前新建一行，添加注销 /* eslint-enable *\/
 * 【】指定忽略的规则，/* eslint-disable no-alert, no-console *\/
 * 【】在特定行禁用，// eslint-disable-line
 * 【】在下一行禁用，// eslint-disable-next-line
 */

module.exports = {

  /**
   * 根目录标识
   *  http://eslint.cn/docs/user-guide/configuring#using-configuration-files
   *  http://eslint.cn/docs/user-guide/configuring#configuration-cascading-and-hierarchy
   * 【】标识当前配置文件为最底层的文件，无需往更上一级的文件目录中进行搜索
   * 【】默认eslint的配置文件搜索方式是，从目标文件夹进行搜索，遍历内部每一个文件夹，找到配置文件并层叠使用。再跳出本项目，往祖先文件夹进行遍历
   * 【】注意「~/.eslintrc」的意义，「~」是指linux上的家目录，「~/.eslintrc」是指家目录下的eslint配置文件，用于私人开发者，用于整个电脑全局约束的。这个配置通过本配置项root去设置，设置了root,eslint检测时将不会再往上搜索
   * 【】eslint的生效规则是就近使用，越近的配置项优先级越高，覆盖其他配置项。如一个项目中，可以在不同文件夹中都添加配置文件，这些规则将重叠组合生效
   */
  root: true, // 标识当前配置文件为eslint的根配置文件，让其停止在父级目录中继续寻找。


  /**
   * 解析器
   *  http://eslint.cn/docs/user-guide/configuring#specifying-parser
   * 【】ESLint 默认使用Espree作为其解析器
   * 【】解析器必须是本地安装的一个 npm 模块。即必须按照在本地的node_module中
   * 【】解析器是用于解析js代码的，怎么去理解每一个表达式，有点C++中编译器的概念，会对js进行一些语法分析，语义分析什么的，才能判断语句符不符合规范。而不是通过简单的字符串对比。
   * 【】解析器有很多，但兼容eslint的解析器有以下几个
   *  Espree：默认解析器，一个从Esprima中分离出来的解析器，做了一些优化
   *  Esprima：js标准解析器
   *  Babel-ESLint： 一个对Babel解析器的包装，babel本身也是js解析器的一种（不然怎么能转化为兼容性代码呢？首先需要进行js解析，才能转化）。如果我们的代码需要经过babel转化，则对应使用这个解析器
   *  typescript-eslint-parser(实验) - 一个把 TypeScript 转换为 ESTree 兼容格式的解析器
   * 【】但是通常在vue项目中，并不会写在 parser 字段中，而是写在 parserOptions -> parser。具体原因在 parserOptions 一栏中介绍
   */
  // parser: 'babel-eslint',


  /**
   * 解析器配置项
   *  http://eslint.cn/docs/user-guide/configuring#specifying-parser-options
   * 【】这里设置的配置项将会传递到解析器中，被解析器获取到，进行一定的处理。具体被利用到，要看解析器的源码有没有对其进行利用。这里仅仅做了参数定义，做了规定，告诉解析器的开发者可能有这些参数
   * 【】配置项目有：
   * "sourceType": "module",    // 指定JS代码来源的类型，script(script标签引入？) | module（es6的module模块），默认为script。为什么vue的会使用script呢？因为vue是通过babel-loader编译的，而babel编译后的代码就是script方式
   * "ecmaVersion": 6,          // 支持的ES语法版本，默认为5。注意只是语法，不包括ES的全局变量。全局变量需要在env选项中进行定义
   * "ecmaFeatures": {          // Features是特征的意思，这里用于指定要使用其他那些语言对象
       "experimentalObjectRestSpread": true,  //启用对对象的扩展
       "jsx": true,                           //启用jsx语法
       "globalReturn":true,                   //允许return在全局使用
       "impliedStrict":true                   //启用严格校验模式
     }
   */
  parserOptions: {
    /**
     * 这里出现 parser 的原因
     * 【】首先明确一点，官方说明中，parserOptions的配置参数是不包括 parser 的
     * 【】这里的写 parser 是 eslint-plugin-vue 的要求，是 eslint-plugin-vue 的自定义参数
     * 【】根据官方文档，eslint-plugin-vue 插件依赖 「vue-eslint-parser」解析器。「vue-eslint-parser」解析器，只解析 .vue 中html部分的内容，不会检测<script>中的JS内容。
     * 【】由于解析器只有一个，用了「vue-eslint-parser」就不能用「babel-eslint」。所以「vue-eslint-parser」的做法是，在解析器选项中，再传入一个解析器选项parser。从而在内部处理「babel-eslint」，检测<script>中的js代码
     * 【】所以这里出现了 parser
     * 【】相关文档地址，https://vuejs.github.io/eslint-plugin-vue/user-guide/#usage
     */
    // parser: 'babel-eslint',
  },


  /**
   * 运行环境
   *  http://eslint.cn/docs/user-guide/configuring#specifying-environments
   * 【】一个环境定义了一组预定义的全局变量
   * 【】获得了特定环境的全局定义，就不会认为是开发定义的，跳过对其的定义检测。否则会被认为改变量未定义
   * 【】常见的运行环境有以下这些，更多的可查看官网
   *  browser - 浏览器环境中的全局变量。
   *  node - Node.js 全局变量和 Node.js 作用域。
   *  es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
   *  amd - 将 require() 和 define() 定义为像 amd 一样的全局变量。
   *  commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
   *  jquery - jQuery 全局变量。
   *  mongo - MongoDB 全局变量。
   *  worker - Web Workers 全局变量。
   *  serviceworker - Service Worker 全局变量。
   */
  env: {
    browser: true, // 浏览器环境
  },


  /**
   * 全局变量
   * http://eslint.cn/docs/user-guide/configuring#specifying-globals
   * 【】定义额外的全局，开发者自定义的全局变量，让其跳过no-undef 规则
   * 【】key值就是额外添加的全局变量
   * 【】value值用于标识该变量能否被重写，类似于const的作用。true为允许变量被重写
   * 【】注意：要启用no-global-assign规则来禁止对只读的全局变量进行修改。
   */
  globals: {
    process: false, // 例如定义gTool这个全局变量，且这个变量可以被重写
    require: false,
  },


  /**
   * 插件
   * http://eslint.cn/docs/user-guide/configuring#configuring-plugins
   * 【】插件同样需要在node_module中下载
   * 【】注意插件名忽略了「eslint-plugin-」前缀，所以在package.json中，对应的项目名是「eslint-plugin-vue」
   * 【】插件的作用类似于解析器，用以扩展解析器的功能，用于检测非常规的js代码。也可能会新增一些特定的规则。
   * 【】如 eslint-plugin-vue，是为了帮助我们检测.vue文件中 <template> 和 <script> 中的js代码
   */
  // plugins: ['vue'],


  /**
   * 规则继承
   * http://eslint.cn/docs/user-guide/configuring#extending-configuration-files
   *【】可继承的方式有以下几种
   *【】eslint内置推荐规则，就只有一个，即「eslint:recommended」
   *【】可共享的配置， 是一个 npm 包，它输出一个配置对象。即通过npm安装到node_module中
   *   可共享的配置可以省略包名的前缀 eslint-config-，即实际设置安装的包名是 eslint-config-airbnb-base
   *【】从插件中获取的规则，书写规则为 「plugin:插件包名/配置名」，其中插件报名也是可以忽略「eslint-plugin-」前缀。如'plugin:vue/essential'
   *【】从配置文件中继承，即继承另外的一个配置文件，如'./node_modules/coding-standard/eslintDefaults.js'
   */
  extends: [
    "eslint:recommended"
    /**
     * vue 的额外添加的规则是 v-if, v-else 等指令检测
     */
    // 'plugin:vue/essential', // 额外添加的规则可查看 https://vuejs.github.io/eslint-plugin-vue/rules/
    /**
     * 「airbnb，爱彼迎」
     * 【】有两种eslint规范，一种是自带了react插件的「eslint-config-airbnb」，一种是基础款「eslint-config-airbnb-base」，
     * 【】airbnb-base 包括了ES6的语法检测，需要依赖 「eslint-plugin-import」
     * 【】所以在使用airbnb-base时，需要用npm额外下载 eslint-plugin-import
     * 【】所以eslint实际上已经因为 airbnb-base 基础配置项目，添加上了 eslint-plugin-import 插件配置
     * 【】所以在setting和rules里，都有 'import/xxx' 项目，这里修改的就是 eslint-plugin-import 配置
     */
    // 'airbnb-base',
  ],


  /**
   * 规则共享参数
   * http://eslint.cn/docs/user-guide/configuring#adding-shared-settings
   * 【】提供给具体规则项，每个参数值，每个规则项都会被注入该变量，但对应规则而言，有没有用，就看各个规则的设置了，就好比 parserOptions，解析器用不用它就不知道了。这里只是提供这个方法
   * 【】不用怀疑，经源码验证，这就是传递给每个规则项的，会当做参数传递过去，但用不用，就是具体规则的事情
   */
  settings: {
    /**
     *
     * 注意，「import/resolver」并不是eslint规则项，与rules中的「import/extensions」不同。它不是规则项
     * 这里只是一个参数名，叫「import/resolver」，会传递给每个规则项。
     * settings并没有具体的书写规则，「import/」只是import模块自己起的名字，原则上，它直接命名为「resolver」也可以，加上「import」只是为了更好地区分。不是强制设置的。
     * 因为「import」插件很多规则项都用的这个配置项，所以并没有通过rules设置，而是通过settings共享
     * 具体使用方法可参考https://github.com/benmosher/eslint-plugin-import
     */
    // 'import/resolver': {
      /**
       * 这里传入webpack并不是import插件能识别webpack，而且通过npm安装了「eslint-import-resolver-webpack」，
       * 「import」插件通过「eslint-import-resolver-」+「webpack」找到该插件并使用，就能解析webpack配置项。使用里面的参数。
       * 主要是使用以下这些参数，共享给import规则，让其正确识别import路径
       * extensions: ['.js', '.vue', '.json'],
       * alias: {
       *  'vue$': 'vue/dist/vue.esm.js',
       *  '@': resolve('src'),
       *  'static': resolve('static')
       * }
       */
    //   webpack: {
    //     config: 'build/webpack.base.conf.js'
    //   }
    // }
  },

  /**
   * 针对特定文件的配置
   * 【】可以通过overrides对特定文件进行特定的eslint检测
   * 【】特定文件的路径书写使用Glob格式，一个类似正则的路径规则，可以匹配不同的文件
   * 【】配置几乎与 ESLint 的其他配置相同。覆盖块可以包含常规配置中的除了 extends、overrides 和 root 之外的其他任何有效配置选项，
   */
  // overrides: [
  //   { // icon-box针对「xlink:href」进行v-bind绑定，跳过eslint检测
  //     'files': ['src/components/icon-box/index.vue'],
  //     'rules': {
  //       'vue/valid-v-bind': 0
  //     }
  //   }
  // ],

  /**
   * 自定义规则
   * http://eslint.cn/docs/user-guide/configuring#configuring-rules
   * 【】基本使用方式
   *  "off" 或者 0 关闭规则
   *  "warn" 或者1 将规则打开为警告（不影响退出代码）
   *  "error" 或者2 将规则打开为错误（触发时退出代码为1）
   *  如：'no-restricted-syntax': 0, // 表示关闭该规则
   * 【】如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
   *  如 'semi': ['error', 'never'], never就是额外的配置项
   */
  rules: {
    /**
     * 具体规则
     * 【】具体的规则太多，就不做介绍了，有兴趣的同学可以上eslint官网查
     * 【】注意 xxx/aaa 这些规则是 xxx 插件自定的规则，在eslint官网是查不到的。需要到相应的插件官网中查阅
     * 【】如 import/extensions，这是「eslint-plugin-import」自定义的规则，需要到其官网查看 https://github.com/benmosher/eslint-plugin-import
     */
    /**
     * 逻辑错误及最佳实践的规则
     */
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止debugger
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console
    // 'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止alert
    "for-direction": 2, // 禁止for无限循环
    "no-compare-neg-zero": 2, // 禁止与-0进行比较
    'no-cond-assign': 2, // 禁止条件语句中出现赋值语句
    "no-control-regex": 2, // 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。
    "no-dupe-args": 2, // 禁止在函数定义或表达中出现重名参数
    "no-dupe-keys": 2, // 禁止在对象字面量中出现重复的键
    "no-duplicate-case": 2, // 禁止重复 case 标签
    "no-empty": 2, // 禁止空块语句
    "no-empty-character-class": 2, // 禁止在正则表达式中出现空字符集
    "no-ex-assign": 2, // 禁止对 catch 子句中的异常重新赋值。因为catch出来的都是错误信息，不需要重新赋值
    "no-extra-boolean-cast": 2, // 禁止不必要的布尔类型转换，如 !!true
    "no-extra-semi": 2, // 禁用不必要的分号
    "no-inner-declarations": 2, // ??? 禁止在嵌套的语句块中出现变量
    "no-regex-spaces": 2, // 禁止正则表达式字面量中出现多个空格
    "no-obj-calls": 2, // 禁止将全局对象当作函数进行调用
    "no-template-curly-in-string": 2, // 禁止在常规字符串中出现模板字面量占位符语法
    "semi": [2, 'never'], // 强制是否使用分号。
    "no-unexpected-multiline": 2, // 禁止使用令人困惑的多行表达式
    "no-unreachable": 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    "use-isnan": 2, // 要求调用 isNaN()检查 NaN
    "no-unsafe-negation": 2, // 禁止对关系运算符的左操作数使用否定操作符
    "valid-jsdoc": [2, { requireReturn: false }], // 强制使用有效的 JSDoc 注释，JSDoc 使用教程 http://shouce.jb51.net/jsdoc/
    "valid-typeof": 2, // 强制 typeof 表达式与有效的字符串进行比较
    "array-callback-return": 2, // 强制数组方法的回调函数中有 return 语句
    "block-scoped-var": 2, // 把 var 语句看作是在块级作用域范围之内
    "curly": 2, // 要求遵循大括号约定
    "default-case": 1, // 要求 Switch 语句中有 Default 分支
    "dot-location": [2, 'property'], // 强制在点号之前换行
    "dot-notation": 2, // 点号和字面量，优先使用点号
    "eqeqeq": [1, 'smart'], // 要求使用 === 和 !==
    "no-caller": 2, // 禁用 caller 或 callee
    "no-empty-function": 1, // 禁止出现空函数
    "no-empty-pattern": 2, // 禁止使用空解构模式
    "no-eval": 2, // 禁用 eval()
    "no-global-assign": 2, // 禁止对原生对象或只读的全局对象进行赋值
    "no-floating-decimal": 2, // 禁止浮点小数
    "no-fallthrough": 2, // 禁止 case 语句落空
    "no-labels": 2, // 禁用标签语句
    "no-extra-label": 2, // 禁用不必要的标签
    "no-extra-bind": 2, // 禁止不必要的函数绑定
    "no-iterator": 2, // 禁用迭代器
    "no-lone-blocks": 2, // 禁用不必要的嵌套块
    "no-loop-func": 2, // 禁止循环中存在函数
    "no-magic-numbers": [1, { // momo????
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 24, 60, 100, 1000],
    }], // 禁止使用魔术数字，魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。
    "no-multi-spaces": [
      2,
      { 
        ignoreEOLComments: true //忽略行尾注释前的多个空格
      }
    ], // 禁止出现多个空格
    "no-multi-str": 2, // 禁止多行字符串
    "no-new": 2, // 禁止在不保存实例的情况下使用new
    "no-new-func": 2, // 禁用Function构造函数
    "no-new-wrappers": 2, // 禁止原始包装实例
    "no-octal": 2, // 禁用八进制字面量
    "no-octal-escape": 2, // 禁止在字符串字面量中使用八进制转义序列
    "no-proto": 2, // 禁用__proto__，改用 getPrototypeOf 方法替代 __proto__。
    "no-redeclare": 2, // 禁止重新声明变量
    "no-return-assign": 2, // 禁止在返回语句中赋值
    "no-return-await": 2, // 禁用不必要的 return await
    "no-script-url": 2, // 禁用 Script URL
    "no-self-assign": 2, // 禁止自身赋值
    "no-sequences": 2, // 不允许使用逗号操作符
    "no-throw-literal": 2, // 限制可以被抛出的异常
    "no-unmodified-loop-condition": 2, // 禁用一成不变的循环条件
    "no-useless-call": 2, // 禁用不必要的 .call() 和 .apply()
    "no-useless-concat": 2, // 禁止没有必要的字符拼接
    "no-useless-escape": 2, // 禁用不必要的转义
    "no-useless-return": 2, // 禁止多余的 return 语句
    "no-void": 2, // 禁止使用void操作符
    "no-with": 2, // 禁用 with 语句
    "prefer-promise-reject-errors": 1, // 要求使用 Error 对象作为 Promise 拒绝的原因
    "require-await": 2, // 禁止使用不带 await 表达式的 async 函数
    "vars-on-top": 2, // 要求将变量声明放在它们作用域的顶部
    "wrap-iife": [2, 'inside'], // 需要把立即执行的函数包裹起来
    "strict": [2, 'global'], // 要求或禁止使用严格模式指令
    /**
     * 变量相关的规则
     */
    "no-delete-var": 2, // 禁止删除变量
    "no-shadow": 2, // 禁止变量声明覆盖外层作用域的变量
    "no-shadow-restricted-names": 2, // 关键字不能被遮蔽
    "no-undef": 2, // 禁用未声明的变量
    "no-unused-vars": 1, // 禁止未使用过的变量
    "no-use-before-define": 2, // 禁止定义前使用
    // 代码风格
    "array-bracket-newline": [1, { multiline: true }], // ???? 在数组开括号后和闭括号前强制换行
    "array-bracket-spacing": 2, // 强制在括号内前后使用空格
    "array-element-newline": [1, "consistent"], // ??? 强制数组元素间出现换行
    "block-spacing": 2, // 强制在代码块中开括号前和闭括号后有空格
    "brace-style": 2, // 大括号风格要求
    "camelcase": 2, // 要求使用骆驼拼写法
    "comma-dangle": [2, 'always-multiline'], // 要求或禁止使用拖尾逗号
    "comma-spacing": 2, // 强制在逗号周围使用空格
    "comma-style": 2, // 逗号风格
    "computed-property-spacing": 2, // 禁止或强制在计算属性中使用空格
    "consistent-this": [2, 'that'], // 要求一致的 this
    "func-call-spacing": 2, // 要求或禁止在函数标识符和其调用之间有空格
    // "func-style": [2, 'declaration'], // ??? 强制 function 声明或表达式的一致性
    "function-paren-newline": [1, 'multiline'], // 强制在函数括号内使用一致的换行
    "indent": [2, 2, { "SwitchCase": 1 }], // 强制使用一致的缩进
    "jsx-quotes": 2, // 强制在 JSX 属性中一致地使用双引号或单引号
    "key-spacing": 2, // 强制在对象字面量的键和值之间使用一致的空格
    "keyword-spacing": 2, // 强制关键字周围空格的一致性
    "linebreak-style": 0, // 强制使用一致的换行符风格，用\n，不用\r\n
    "lines-around-comment": 2, // 强制注释周围有空行
    "lines-between-class-members": 2, // 要求在类成员之间出现空行
    "max-depth": [2, 3], // 强制块语句的最大可嵌套深度
    "max-len": [2, {
      "code": 120,
      "ignoreUrls": true,
      "ignoreStrings": true, // mommo????
      "ignoreTrailingComments": true,
      "ignoreTemplateLiterals": true,
    }], // 强制行的最大长度
    "max-lines": [1, 1000], // 强制文件的最大行数
    "max-nested-callbacks": [2, 5], // 强制回调函数最大嵌套深度
    "max-statements-per-line": 2, // 强制每一行中所允许的最大语句数量
    "new-cap": 2, // 要求构造函数首字母大写
    "new-parens": 2, // 要求调用无参构造函数时带括号
    "newline-per-chained-call": 2, // 要求方法链中每个调用都有一个换行符
    "no-bitwise": 2, // 禁止使用按位操作符
    "no-lonely-if": 2, // 禁止 if 语句作为唯一语句出现在 else 语句块中
    "no-mixed-spaces-and-tabs": 2, // 禁止使用 空格 和 tab 混合缩进
    "no-multiple-empty-lines": 1, // 不允许多个空行
    // "no-negated-condition": 2, // 禁用否定表达式
    "no-nested-ternary": 2, // 禁止使用嵌套的三元表达式
    "no-new-object": 2, // 禁止使用 Object 构造函数
    "no-trailing-spaces": 2, // 禁用行尾空白
    "no-underscore-dangle": [2, { allowAfterThis: true }], // 禁止标识符中有悬空下划线
    "quotes": [2, 'single'], // 强制使用一致的单引号
    "quote-props": [2, 'as-needed'], // ??? 要求对象字面量属性名称使用引号
    "operator-linebreak": [2, 'before'], // 强制操作符使用一致的换行符风格
    "one-var": [2, 'never'], // 强制函数中的变量在一起声明或分开声明
    "object-property-newline": 1, // 强制将对象的属性放在不同的行上
    "object-curly-spacing": [2, 'always'], // 强制在花括号中使用一致的空格
    "object-curly-newline": [1, {
      multiline: true,
      consistent: true
    }], // 对象属性换行
    "no-whitespace-before-property": 2, // 禁止属性前有空白
    "no-unneeded-ternary": 2, // 禁止可以表达为更简单结构的三元操作符
    "semi-spacing": 2, // 强制分号前后有空格
    "semi-style": 2, // 分号风格
    "space-before-blocks": [2, 'always'], // 禁止语句块之前的空格
    "space-before-function-paren": [2, 'never'], // 禁止函数圆括号之前有一个空格
    "space-in-parens": 2, // 禁止或强制圆括号内的空格
    "space-infix-ops": 2, // 要求中缀操作符周围有空格
    "space-unary-ops": 2, // 禁止在一元操作符之前或之后存在空格
    "spaced-comment": 2, // 要求在注释前有空白
    "switch-colon-spacing": 2, // 强制在 switch 的冒号左右有空格
    "template-tag-spacing": 2, // 要求在模板标记和它们的字面量之间有空格
    /**
     * ES6相关规则
     */
    "arrow-parens": [2, 'as-needed'], // 要求箭头函数的参数使用圆括号
    "arrow-body-style": 2, // 要求箭头函数体使用大括号
    "arrow-spacing": 2, // 要求箭头函数的箭头之前或之后有空格
    "generator-star-spacing": [2, { // 强制 generator 函数中 * 号周围有空格
      before: false,
      after: true,
    }],
    "no-class-assign": 2, // 不允许修改类声明的变量
    "no-confusing-arrow": 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-const-assign": 2, // 不允许改变用const声明的变量
    "no-dupe-class-members": 2, // 不允许类成员中有重复的名称
    "no-duplicate-imports": 2, // 禁止重复导入
    "no-new-symbol": 0, // 禁止 Symbol 操作符和 new 一起使用lines-between
    "no-useless-computed-key": 2, // 禁止在对象中使用不必要的计算属性
    "no-useless-constructor": 2, // 禁用不必要的构造函数
    "no-useless-rename": 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    "no-var": 2, // 要求使用 let 或 const 而不是 var
    "object-shorthand": 2, // 要求对象字面量简写语法
    "prefer-arrow-callback": 2, // 要求使用箭头函数作为回调
    "prefer-const": 0, // 建议使用 const
    "prefer-destructuring": [2, { // 优先使用数组和对象解构
      "array": false,
      "object": true
    }],
    "prefer-rest-params": 2, // 使用剩余参数代替 arguments
    "prefer-spread": 2, // 建议使用扩展运算符而非 .apply()
    "prefer-template": 2, // 建议使用模板而非字符串连接
    "require-yield": 2, // 禁用函数内没有yield的 generator 函数
    "rest-spread-spacing": 2, // 强制剩余和扩展运算符及其表达式之间有空格
    "template-curly-spacing": 2, // 强制模板字符串中空格的使用
  }
};
