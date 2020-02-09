import React, { Component } from 'react'
import { Grid } from '@material-ui/core/';
import Timer from './Timer'
import {
  Favorite as FavoriteIcon} from '@material-ui/icons/';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as timeActions from '../actions/time'

var seconds = 0;

const Lifes = (props) => {

	let lifes = [];
	let total_vidas = props.lifes;


	for(let i = 0; i < 3; i++) {
		if(total_vidas != 0){
			lifes.push(<FavoriteIcon classes={{root: 'life-icons'}}/>)
			total_vidas--
		}
		else{
			lifes.push(<FavoriteIcon classes={{root: 'no-life-icons'}}/>)
		}		
	}

	return (
		<Grid md={3} classes={{root: 'lifes'}}>
          {lifes}
        </Grid>
	)
}

class GameBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	seconds: 0,
	  	index: 1,
	  	questWords: []
	  };

	  console.log(props)
	  this.returnSeconds()
	}

	returnSeconds = () => {
		if(this.props.time > 0) {
			seconds = 5 * this.props.time / 100
		}
		else {
			seconds = 0
		}
	}

	componentDidUpdate() {
		this.returnSeconds()
	}

	render() {
		return(
			<Grid container item direction="row" justify="center" md={12}>
            <Grid md={3} classes={{root: 'seconds'}}>
              <span> { Math.round(seconds) } segundos</span>
            </Grid>
            
            <Grid md={6} classes={{root: 'steps'}}>
              <h3>{(this.props.wordindex + 1)}/12</h3>
            </Grid>

            <Lifes lifes={this.props.life} />
           
           <Timer/> 
          </Grid>
		)
	}
}

const mapStateToProps = state => ({
	time: state.time,
	wordindex: state.wordindex,
	question: state.question,
	life: state.life
})

const mapDispatchToProps = dispatch => bindActionCreators(timeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GameBar)