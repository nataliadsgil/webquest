import React, { Component } from 'react'

import {
	Grid,
	LinearProgress,
	withStyles,
  	lighten
} from '@material-ui/core'

import './ListLevels.css'

import MainBar from './components/MainBar'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import api from './services/api'

import * as levelActions from './actions/levels'
import * as currentLevelActions from './actions/currentLevel'


const CustomLinearProgress = (props) => {

	let options = {
		root: {
	      height: 10,
	      borderRadius: 20,
	      backgroundColor: lighten('#2cbf67', 0.8)
	    },
	    bar: {
	      borderRadius: 20,
	      backgroundColor: '#1bae56'
	    },
	}

	var BorderLinearProgress = withStyles(options)(LinearProgress)

	return (
		<>
		<span style={{fontSize: '12px', marginTop: '15px', color: '#2cbf67', marginBottom: '5px', textAlign: 'left', width: '90%' }}>Máx: {props.value}%</span>
		<BorderLinearProgress variant="determinate" className="progress" value={props.value} />
		</>
	)
}

class ListLevels extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  console.log(props)
	}

	componentDidMount() {

		var self = this;

		async function loadLevels() {
			const response = await api.get('/level')

			if(response.status == 200) {
				self.props.setLevels(response.data)
			}
		}

		loadLevels()
	}

	goToLevel = (level) => {
		this.props.setLevel(level)
		this.props.history.push("/quest")
	}

	render() {
		return (
			<Grid container item direction="row" justify="center">
		     	
		     	<MainBar/>

		      	<Grid container item direction="row" justify="center" md={8} style={{marginTop: '30px'}}>
		      		{this.props.levels.map(level => (
		      			<Grid 
		      				container
		      				item md={3}
		      				justify="center"
		      				alignItems='center'
		      				classes={{root: 'level-card'}}
		      				direction="column"
		      				onClick={(e) => this.goToLevel(level)}
		      				key={level._id} >
			      			

			      			<Grid container item md={10} direction="column" justify="center"
		      				alignItems='center'>
			      				<span className="title-level">{level.item.name}</span>
				      			<span className="qtd-questions">{level.qtdQuest}</span>
				      			<span className="simple-text">Palavras</span>
				      			<CustomLinearProgress value={level.item.progress}/>
			      			</Grid>

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

const mapDispatchToProps = dispatch => bindActionCreators({
	...levelActions,
	...currentLevelActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListLevels)