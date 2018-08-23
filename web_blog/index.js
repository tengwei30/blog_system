/**
 * Created by xiaosong
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './src/reduces';
import App from './src/app.js';

// 自己封装了一下store，比较适合在实际开发中使用
const store = createStore();

render(
	<Provider store={ store }>
		<App />
	</Provider>, document.getElementById('root')
)






