import React from 'react';
import CmtItem from './CmtItem';

export default  class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentList: [
                {id: 1, user: 'sss', content: 'java'},
                {id: 2, user: 'java', content: 'java'},
                {id: 3, user: 'edge', content: 'java'},
                {id: 4, user: 'nb', content: 'java'},
            ]
        }
    }

    render() {
        return <div>
            <h1> 这是评论列表组件 </h1>
            {this.state.CommentList.map(item => <CmtItem {...item}></CmtItem>)}
        </div>
    }
}