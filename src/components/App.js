import React from 'react';
import './App.css';
import List from'./List';

/*기본 구조

import React from 'react';

class App extends React.Component {
	
	constructor(props){
		super(props);
	}//초기화
	
	render(){
		
		return (

		)
	}
}

export default App;

*/

class App extends React.Component {
	
	render(){
		
		return (
            <div className="container">
                <List />
            </div>
		)
	}
}

export default App;