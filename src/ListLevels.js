import React, { Component } from 'react'

import {
	Grid
} from '@material-ui/core'

import './ListLevels.css'

import MainBar from './components/MainBar'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ListLevels extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  console.log(props)
	}

	render() {
		return (
			<Grid container item direction="row" justify="center">
		     	
		     	<MainBar/>

		      	<Grid container item direction="row" justify="center" md={8} style={{marginTop: '30px'}}>
		      		{this.props.levels.map(level => (
		      			<Grid container item md={3} justify="center" alignItems='center' classes={{root: 'level-card'}} direction="column" >
			      			<span class="title-level">{level.name}</span>
			      			<span class="qtd-questions">{level.qtdWords}</span>
			      			<span class="simple-text">Palavras</span>
			      		</Grid>
		      		))}	
		      	</Grid>

		    </Grid>
		)
	}
}

const mapStateToProps = state => ({
	levels: state.levels
})

export default connect(mapStateToProps, null)(ListLevels)