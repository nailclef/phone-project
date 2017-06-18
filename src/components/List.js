import React from 'react';
import Item from './Item';
import './List.css';

class List extends React.Component {
	
	constructor(props){
		super(props);
	}//초기화
	
	render(){
		
		return (
            <div className="row">
                <div className="title">
                    <input type="text" placeholder="Todo?" />
                </div>
                <Item />
            </div>
		)
	}
}

export default List;