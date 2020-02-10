import React from 'react'
import App from './App'
import  ListLevels from './ListLevels'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={App}/>
				<Route path="/levels" exact={true} component={ListLevels}/>
			</Switch>
		</BrowserRouter>
	)
}

export default Router