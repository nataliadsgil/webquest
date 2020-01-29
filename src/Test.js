import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as typedwordActions from './actions/typedword'

class Test extends Component { 

  constructor(props) {
    super(props);
    
    console.log(props)
  }

  state = {
    text: 'Olá'
  }

  changeSomething = () => {
    this.props.typeWord(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <>
      <input value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}/>
      <button onClick={this.changeSomething}>{this.state.text}</button>
      </>
    )
  }

}


const mapDispatchToProps = dispatch => bindActionCreators(typedwordActions, dispatch)


export default connect(null, mapDispatchToProps)(Test)