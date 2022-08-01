# type用法

type 有两种用法

- 类型别名
- 索引访问类型


## 类型别名

类型别名用来给一个类型起个新名字

类型别名常用于联合类型。


```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver; // 这里就是用 | 代表或，Name 或 NameResolver类型都可以

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

## 索引访问类型

[ts 官方例子](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

```ts
type Language = '中文' | '英文'
function sayHello(lang: Language) {
    if(lang === '中文'){
      return '你好，世界'
    }else if(lang === '英文'){
      return 'hello world'
    }
}

sayHello('中文');  // 没问题
sayHello('韩语');  // 报错 Argument of type '"韩语"' is not assignable to parameter of type 'Language'.(2345)
```

上例中，我们使用 type 定了一个字符串字面量类型 Language，它只能取'中文' | '英文'中的一种。

