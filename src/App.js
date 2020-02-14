import React, { useState, useEffect } from 'react';
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

import './App.css';

import {
  Favorite as FavoriteIcon} from '@material-ui/icons/';


function App() {
  
 
  return (
    <Grid container item direction="row" justify="center">

      <TimeoutModal/>

      <ResultModal/>

      <MainBar/>

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


export default App;
