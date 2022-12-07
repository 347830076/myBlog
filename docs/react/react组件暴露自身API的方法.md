# React 组件暴露自身 API 的方法

## 通过 ref

```tsx
// parent.tsx
import React, { useRef } from "react"
import Child from "./child"

const Parent = () => {
    const classChildRef: any = useRef(null)
    // 调用子组件实例上的 childGet()
    const getClassChildFn = () => classChildRef.current.childGet()

    return (
        <div>
            <Child ref={classChildRef} />
            <button onClick={getClassChildFn}>获取子组件值</button>
        </div>
    )
}
export default Parent
```

```tsx
// child.tsx
import React, { useImperativeHandle, useRef } from "react"

interface Props {
    childGet?: (obj:objParam | undefined) => void,
}

// 使用 React.forwardRef() 将 ref 属性暴露（使得任意一个组件都可以使用该 ref），该函数本身返回一个 React 结点。
const Child = React.forwardRef(
    (props: Props, ref: React.ForwardedRef<Props>) => {
        let state = { index: 0 }
        // 第 1 个参数：暴露 ref 属性。
        // 第 2 个参数：具体暴露的值。
        useImperativeHandle(ref, () => (
            {
                childGet() { console.log(state.index) },
            }
        ))
        return (<div>Child</div>)
    }
)

export default Child
```

当单击父组件按钮（获取子组件值）时，就会调用子组件实例使用 `useImperativeHandle Hook` 暴露出来的 `childGet()`，从而在控制台输出子组件实例的 `state.index` 值。


### useRef 的 typescript写法

下面是一个已 antd-mobile框架的modal组件，进行二次封装的完整代码

```tsx
// 重置弹窗样式组件
import React, { useImperativeHandle, useRef } from 'react'
import styles from './reset-modal.module.scss'
import { Modal } from 'antd-mobile'
import { ModalProps } from 'antd-mobile/es/components/modal/modal'
import { ModalShowHandler } from 'antd-mobile/es/components/modal/show'
import Icon from '@/components/icon/icon'

// 外部使用useRef的时候可以使用 例如：const ResetModalRef = useRef<ResetModalProps>(null)
export interface ResetModalProps extends ModalProps{
  show: () => void,
  close: () => void,
}

interface Props{
  children: React.ReactNode,
}
const resetModal = React.forwardRef<ResetModalProps, Props>((props, ref) => {

  const modalRef = useRef<ModalShowHandler>()

  // 显示
  const show = () => {
    modalRef.current = Modal.show({
      ...props,
      bodyClassName: styles.ModalBodyClassName,
      content: <div className={styles.modalBox}>
        <div className={styles.content}>
          {props.children}
        </div>
        <div className={styles.closeBox}>
          <Icon type="close" className={styles.close} onClick={() => modalRef.current?.close()} />
        </div>
      </div>
    })
  }

  // 关闭
  const close = () => {
    modalRef.current?.close()
  }

  useImperativeHandle(ref, () => (
    {
      children: props.children,
      show,
      close
    }
  ))

  return <></>
})

export default resetModal

```
## 传递 props

```tsx
 // parent.tsx
 import React from 'react';
 import Child from "./child";
 const Parent = () => (<Child sayHello={{ sayHello: "hello" }} />)
 export default Parent
```

```tsx
 // child.tsx
 import { useEffect } from 'react';
 interface Props {
    sayHello: string
}
 const Child = (props: Props) => {
      const sayHello = (v: string) => { console.log(v) }
      // 当父组件有向子组件传递 props(sayHello) 时，就调用子组件的某个方法，或干脆调用父组件传递这个 props.
      useEffect(() => props.sayHello 
          ? sayHello(props.sayHello) 
          : console.error('sayHello is not passed'))
      return (<div className="child" />)
 }
 export default Child;
```

## Child 的静态属性

```tsx
 // parent.tsx
 import React from 'react';
 import Child from "./child";
 const Parent = () => (<UseExport />)
 Child.say('Yomua'); // 控制台输出：Yomua
 export default Parent;
```

```tsx
 // child.tsx
 import React from 'react';
 const Child = () => (<div>Child</div>)
 
 // 为 Child 定义静态属性
 Child.say = (v: string) => { console.log(v) }
 export default Child;
```

由于子组件存在静态属性，所以父组件中只要导入子组件，就可以直接使用：`子组件.静态属性`

## 实例化子组件

```tsx
 // parent.tsx
 import React, { Component } from 'react';
 import ClassChild from "./child"; 
 const ClassParent = () => {
      const getChildValue = () => {
          let child = new ClassChild()
          child.childGet(); // 输出：0
      }
      return (
          <div>
              <ClassChild />
              <button onClick={getChildValue}>获取子组件值</button>
          </div>
      )
 }
 export default Parent
```

```tsx
// child.tsx
import { Component } from 'react'
class ClassChild extends Component {
  static childGet: () => void

  state: { index: number, }

  constructor(props?: any) {
    super(props)
    this.state = { index: 0 }
  }

  // 这个方法 可以被父组件获取到（只要父组件实例化子组件即可）
  childGet = () => {
    console.log(this.state.index)
  }

  render() {
    return (<div>Child</div>)
  }
}
export default ClassChild
```


##