import React from 'react';

// 加export default外部才能引用并使用
export default class ComponentHeader extends React.Component {
    render() {
        return (
            <header>
                <h1>这里是头部</h1>
            </header>
        )
    }
}
