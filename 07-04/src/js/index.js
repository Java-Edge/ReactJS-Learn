var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import Hello from './components/Hello';

class Index extends React.Component {
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

		return (
			<div>
				<ComponentHeader/>
				<BodyIndex/>
				<ComponentFooter/>
				{arr.map(item => <div key={item}><h3>{item}</h3></div> )}
			</div>
		);
	}
}
var fruits = ['Apple', 'Banana'];
const arr = ['1', '2', '3', '4'];
// 定义一个空数组
const nameArr = [];
// React 中需要把 key 添加给 forEach 或 map 或 for 循环直接控制的元素
arr.forEach(item=> {
	const temp = <h5 key={item}>{item}</h5>;
	nameArr.push(temp);
})

const me = {
	name: 'JavaEdge',
	age: "18",
	gender: 'boy'
}

ReactDOM.render(<div>
	123
	<Hello {...me}></Hello>
</div>, document.getElementById('example'));
// ReactDOM.render(
// 	<Index/>, document.getElementById('example'));
