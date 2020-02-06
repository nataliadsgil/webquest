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

import './App.css';

import {
  Favorite as FavoriteIcon} from '@material-ui/icons/';


function App() {
  
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#4EC059', 0.8)
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#4EC059'
    },
  })(LinearProgress);

  const [word, setWord] = useState('')
  const [arrayLetter, setArrayLetter] = useState([])
  const [index, setIndex] = useState(0)
  const [color, setColor] = useState('#555')
  const [count, setCount] = useState(0)
  //const [lifes, setLifes] = useState(3)
  
  const questWords = [
    {word: "red", translate: "vermelho"},
    {word: "green", translate: "verde"},
    {word: "blue", translate: "azul"},
    {word: "yellow", translate: "amarelo"},
    {word: "purple", translate: "roxo"},
    {word: "gray", translate: "cinza"},
    {word: "orange", translate: "laranja"},
    {word: "pink", translate: "rosa"},
    {word: "brown", translate: "marrom"},
    {word: "black", translate: "preto"},
    {word: "white", translate: "branco"},
    {word: "cian", translate: "ciano"}
  ]

  async function updateWord(word) {
    /*if(word.split("").length <= 8){
      setWord(word)
      setArrayLetter(word.split(""))

      if(word === questWords[index].translate){
        
        setColor('#4EC059')
        clearInterval(timer)
        setTime(0)

        setTimeout(() => {
          console.log("here")
          nextWord()
        }, 1000)
        
      }
    }*/
  }

  function timeExceded(){
      handleOpen()
  }

  function nextWord() {
    setOpen(false)
    let add = index + 1
    console.log(add)
    setIndex(add)
    setWord('')
    setArrayLetter([])
    setColor('#555');
    //initTimer()
  }

  

  /*useEffect(
    () => {
      if(time >= 99){
        return () => {
          clearInterval(timer)
          setTime(0)
          timeExceded()
        }
      }
      else{
        return
      }
    }, [time, timer]
  )*/


  

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Provider store={store}>
    <Grid container item direction="row" justify="center">

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modal">
          <h2 id="simple-modal-title">Tempo Esgotado!</h2>
          <p id="simple-modal-description">
            A palavra correta era:
          </p>
          <h3>{questWords[index].translate}</h3>
          <Button classes={{root: 'continue-button'}} onClick={nextWord}>Continuar</Button>
        </div>
      </Modal>

      <Grid container item direction="row" className="menu-bar" md={12}>DSADASD</Grid>
      <Grid 
        className="area-game"
        container
        item
        direction="row"
        justify="center"
        md={8}
        style={{marginTop: '30px'}}>

          <Grid container item direction="row" justify="center" md={12}>
            <Grid md={3} classes={{root: 'seconds'}}>
              <span>{count} segundos</span>
            </Grid>
            
            <Grid md={6} classes={{root: 'steps'}}>
              <h3>{index}/{questWords.length}</h3>
            </Grid>

            <Grid md={3} classes={{root: 'lifes'}}>
              <FavoriteIcon classes={{root: 'life-icons'}}/>
              <FavoriteIcon classes={{root: 'life-icons'}}/>
              <FavoriteIcon classes={{root: 'life-icons'}}/>
            </Grid>
           
           <Timer/> 
          </Grid>



        <Question/>
          
        <TypedWord/>

      </Grid>
    </Grid>
    </Provider>
  );
}


export default App;
