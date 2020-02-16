import React, { Component } from 'react'

import {
	Grid
} from '@material-ui/core'

class MainBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (

			<Grid container item direction="row" className="menu-bar" alignItems="center" justify="center" md={12}>
		        <h1 style={{lineHeight: "5px", marginLeft: '20px', color: '#fff', width: '100%'}}>WebQuest</h1>
		    </Grid>

		)
	}
}

export default MainBar