import React, { useState, useEffect, Component } from 'react';
import { 
  Grid,
  LinearProgress,
  withStyles,
  lighten,
  Modal,
  Button
 } from '@material-ui/core/';

import Test from './Test'
import TypedWord from './components/TypedWord'
import Question from './components/Question'
import Timer from './components/Timer'
import TimeoutModal from './components/TimeoutModal'
import GameBar from './components/GameBar'
import ResultModal from './components/ResultModal'
import MainBar from './components/MainBar'
import InitModal from './components/InitModal'


import coin from './coin.svg'

import './App.css';

import {
  Favorite as FavoriteIcon} from '@material-ui/icons/';


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }
  
 render() {
    return (
      <Grid container item direction="row" justify="center">

        <InitModal/>

        <TimeoutModal/>

        <ResultModal/>

        <MainBar/>

        <Grid container item md={12} classes={{root: 'secondary-bar'}}>
          <Grid container item md={4} alignItems="center" justify="center" >Nível 01</Grid>
          <Grid container item md={4}></Grid>
          <Grid container item md={4} alignItems="center" justify="center">
            <img src={coin} className="coin" />
            20
          </Grid>
        </Grid>

        <Grid 
          className="area-game"
          container
          item
          direction="row"
          justify="center"
          md={8}
          style={{marginTop: '30px'}}>

            
            <GameBar/>



          <Question/>
            
          <TypedWord/>

        </Grid>
      </Grid>
    );
 }

}


export default App;
