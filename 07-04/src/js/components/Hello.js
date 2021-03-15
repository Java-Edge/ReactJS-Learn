import React from 'react';
// 创建组件的方式一
// 创建并导出组件
// 对于 function，如果想使用外界传过来的 props 参数，必须指定该入参，才能访问内容
export default function Hello(props) {
    // 如果在一个组件中 return null，则表示该组件空的，什么都不会渲染
    // 在组件中，必须返回一个合法的JSX虚拟DOM元素
    // 组件永远是只读的，不能被重新赋值
    return <div>这是Hello组件 - {props.name} - {props.age} - {props.gender}</div>
}

// 暴露组件出去
// export default Hello