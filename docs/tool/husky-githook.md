# 项目中使用husky统一管理git-hooks,实现git commit之前校验eslint

git hooks是一些自定义的脚本，用于控制git工作的流程，分为客户端钩子和服务端钩子。完整钩子说明，请参考[官网链接](https://git-scm.com/docs/githooks)

## 安装husky

```
npm install husky --save-dev
```

## 初始化husky

方法一
```
npx husky install
```

在 `package.json` 文件 添加下面命令

```js
{
    scripts: {
        "prepare": "husky install"
    }
}
```
方法二
```
npm run prepare
```

执行完上述安装命令后，将会发生如下几个变化：

- 在.git同级目录生成`.husky文件夹`，文件夹下有一个可以编辑的示例pre-commit钩子
- 在package.json中的scripts中添加了`"prepare": "husky install"`
- 更改.git文件下面的config文件，配置项 core.`hooksPath` 为 `.husky`

## 创建一个hook

要添加另一个钩子，请使用husky add。

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## 更新hooks脚本

修改.husky文件夹下的hooks脚本即可。

## 卸载并还原husky

```
npm uninstall husky
// 删除.husky文件夹，并且重置core.hooksPath
rm -rf .husky && git config --unset core.hooksPath
```

## 跳过hooks

有时候我们因为一些原因，想绕过hooks检查，可通过下方命令实现：

```js
git commit -m 'xxx' --no-verify
```

## 实战

### 项目中commit的时候，校验eslint, 警告和错误都不可以commit

1. 安装好 husky 之后，创建个 pre-commit 的 gitHook

```
npx husky add .husky/pre-commit 'npm run lint'
```

2. 安装lint-staged

```
npm install lint-staged --save-dev
```

`lint-stated`就是针对Git暂存区的文件做校验的一个工具。由于在commit之前，我们要提交的文件是在暂存区的，我们可以利用这个工具来校验我们即将commit的文件，而不会校验其它的文件

配置lint-staged
```
// package.json
{
    scripts: {
        lint-staged: "lint-staged"
    },
    "lint-staged": {
    "*.{js,vue}": [
      "eslint --max-warnings 0"
    ]
  }
}
```

修改 .husky/`pre-push`文件

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint-staged
```

总结写流程： 我们提交 commit 的时候，触发了 `pre-push`的gitHook, 就执行了里面的脚本 `lint-staged`, 然后执行了 `eslint --max-warnings 0`, 最终eslint 0 警告 0 错误就可以commit成功，反之不行。

参考文章：

[详解如何在项目中使用git Hooks（husky、yorkie）](https://juejin.cn/post/6974301879731748900)
