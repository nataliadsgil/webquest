import React from 'react'
import App from './App'
import  ListLevels from './ListLevels'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function Router() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact={true} component={App}/>
					<Route path="/levels" exact={true} component={ListLevels}/>
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

export default Router