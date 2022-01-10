# npm link 调试本地包

## 先去到模块目录，把它 link 到全局

```
cd path/to/my-utils
npm link
```

## 再去项目目录通过包名来 link

```
cd path/to/my-project
npm link my-utils
```

## 去掉 link

```
npm unlink my-utils
```