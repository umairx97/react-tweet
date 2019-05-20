import React from 'react';
import { Provider } from 'react-redux';
import Main from './src';
// import store from './src/store';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Main />
				</PersistGate>
			</Provider>
		);
	}
}
