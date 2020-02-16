import React, { Component } from 'react'
import { 
  TextField,
  Grid
 } from '@material-ui/core/';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as typedwordActions from '../actions/typedword'
import * as questionActions from '../actions/question'
import * as resultActions from '../actions/result'

class TypedWord extends Component {

	constructor(props) {
	  super(props);
	}

	componentDidUpdate(prevProps, prevState) {
		
		if(this.props.result === "WIN" && (prevProps.result === "PLAY" || prevProps.result === "INIT")) {
			setTimeout(() => {
				this.setState({arrayLetter: [], word: ''})	
			}, 1000)
		}

		if(this.props.result === "LOSE" && prevProps.result === "PLAY") {
			setTimeout(() => {
				this.setState({arrayLetter: [], word: ''})	
			}, 1000)
		}
	}
	
	state = {
		arrayLetter: [],
		word: ''
	}

	updateWord = (word) => {
	    //if(word.split("").length <= 10){
	      this.setState({word: word})
	      this.setState({arrayLetter: word.split("")})

	      this.props.typeWord(word)

	      if(word.trim() == this.props.question.answer.toLowerCase().trim()){
	      	this.props.userWin()
	      }
	    //}
  	}

	render(){
		return(
			<>
			<Grid container item md={12} justify="center">
			<div className="container-word">
	            {this.state.arrayLetter.map(letter => (
	              <div className="letter">{letter}</div>
	            ))}
	        </div>
	        </Grid>

	        <TextField 
          value={this.state.word}
          classes={{root: 'input-text'}}
          onChange={(e) => this.updateWord(e.target.value)}></TextField>
          </>
		)
	}
}

const mapStateToProps = state => ({
	question: state.question,
	wordindex: state.wordindex,
	result: state.result
})

const mapDispatchToProps = dispatch => bindActionCreators(
{
	...typedwordActions,
	...questionActions,
	...resultActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TypedWord)