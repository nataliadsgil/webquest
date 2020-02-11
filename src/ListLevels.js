import React, { Component } from 'react'

import {
	Grid
} from '@material-ui/core'

import './ListLevels.css'

class ListLevels extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<Grid container item direction="row" justify="center">
		      <Grid container item direction="row" className="menu-bar" md={12}>
		        <h1 style={{lineHeight: "5px", marginLeft: '20px', color: '#fff'}}>Traduja</h1>
		      </Grid>
		      	
		      	<Grid container item direction="row" justify="center" md={10}>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Cores</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Frutas</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Animais</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Lugares</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Objetos</Grid>

		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Adjetivos</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Coletivos</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Superlativos</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Advérbios de Tempo</Grid>
		      		<Grid container item md={2} justify="center" classes={{root: 'level-card'}}>Advérbios de Intensidade</Grid>
		      	</Grid>

		    </Grid>
		)
	}
}

export default ListLevels