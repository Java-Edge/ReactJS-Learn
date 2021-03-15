import React from "react";

export default class Bindevent extends React.Component {

    constructor() {
        super();
        // 私有数据
        this.state = {
            msg: 'java',
            name: 'sss'
        }
    }

    render() {
        return (
            <div>
                BindEvent组件
                <hr/>
                {/*                <button onClick={function () {
                    console.log('OK!')
                }}>按钮
                </button>      */}
                {/* <button onClick={this.myclickHandler}>按钮
                </button>*/}
                {/*onClick只接收 function 作为事件函数
                  箭头函数本身就是一个匿名的 function 函数*/}
                {/*   <button onClick={() => {
                    console.log('ok');}}>按钮
                </button>*/}

                <button onClick={() => {
                    this.setState({
                        msg: 'ooaa',
                        name: 'iii'
                    }, function () {
                        // 由于是异步的，所以要想拿到最新值，就要使用回调
                        console.log(this.state.msg)
                    });
                    console.log('666');
                }}>按钮
                </button>
                <h3>{this.state.msg}</h3>
                <h3>{this.state.name}</h3>
            </div>
        );
    }
}