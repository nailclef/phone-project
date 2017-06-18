import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './index.css';

ReactDOM.render(<App />, 
				document.getElementById('root'));
registerServiceWorker();

/*npm start 를 통해 시뮬레이션을 돌려 볼 수 있다*/

/*npm run build 를 통해 배포 가능한 형태로 만든다. 하지만 압축버젼으로 만들어지기 때문에 수정이 불가 하다 */