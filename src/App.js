import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './store'
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

import './App.css';

import {
  Favorite as FavoriteIcon} from '@material-ui/icons/';


function App() {
  
 
  return (
    <Provider store={store}>
    <Grid container item direction="row" justify="center">

      <TimeoutModal/>

      <ResultModal/>

      <Grid container item direction="row" className="menu-bar" md={12}>
        <h1 style={{lineHeight: "5px", marginLeft: '20px', color: '#fff'}}>Traduja</h1>
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
    </Provider>
  );
}


export default App;
