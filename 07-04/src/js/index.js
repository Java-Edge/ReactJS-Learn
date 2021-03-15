var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import Hello from './components/Hello';
// import classnote from './classnote';
import inherit from './inherit';

// class 关键字创建组件
class Index extends React.Component {
    // render 用于渲染当前组件的虚拟  DOM 元素。是该类的一个实例方法！
    render() {

        /*
        var component;
        if (用户已登录) {
            component = <ComponentLoginedHeader/>
        }
        else{
            component = <ComponentHeader/>
        }
        */

        // 必须要有返回值
        return (
            <div>
                <ComponentHeader/>
                <BodyIndex/>
                {/*不同于function，如果想使用外界传过来的 props 参数，无需接收，直接访问 this.props.xxx 即可,注意加上大括号，当做 js 执行，而非字符串*/}
                {/*在class 组件内部，this 表示当前组件的实例对象*/}
                这是 Index 组件 --- {this.props.name} -- {this.props.age}
                <ComponentFooter/>
                {/*{arr.map(item => <div key={item}><h3>{item}</h3></div>)}*/}
            </div>
        );
    }
}

var fruits = ['Apple', 'Banana'];
const arr = ['1', '2', '3', '4'];
// 定义一个空数组
const nameArr = [];
// React 中需要把 key 添加给 forEach 或 map 或 for 循环直接控制的元素
arr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>;
    nameArr.push(temp);
})

const me = {
    name: 'JavaEdge',
    age: "18",
    gender: 'boy'
}

ReactDOM.render(<div>
    {/*这里的 Index 标签，就是 Index 类的一个实例对象*/}
    {/*这里就是外界传来的 me，可用 props 访问*/}
    <Index {...me}>
    </Index>
</div>, document.getElementById('example'));
// ReactDOM.render(
// 	<Index/>, document.getElementById('example'));
