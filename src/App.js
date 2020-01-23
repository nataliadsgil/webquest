import React, { useState } from 'react';
import { 
  TextField,
  Grid
 } from '@material-ui/core/';
import './App.css';

function App() {
  
  const [word, setWord] = useState('')
  const [arrayLetter, setArrayLetter] = useState([])
  const [index, setIndex] = useState(0)
  
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

  function updateWord(word) {
    if(word.split("").length <= 8){
      setWord(word)
      setArrayLetter(word.split(""))

      if(word === questWords[index].translate){
        setIndex(index + 1)
        setWord('')
        setArrayLetter([])
      }
    }
  }

  return (
    <>
    <Grid container item direction="row" justify="center">
      <Grid 
        className="area-game"
        container
        item
        direction="row"
        justify="center"
        md={8}>
        
        <Grid container item md={12} justify="center">
          <h1>{questWords[index].word}</h1>
        </Grid>

          <Grid container item md={12} justify="center">
        <div className="container-word">
            {arrayLetter.map(letter => (
              <div className="letter">{letter}</div>
            ))}
        </div>
        </Grid>
        <TextField 
          value={word}
          onChange={(e) => updateWord(e.target.value)}></TextField>
      </Grid>
    </Grid>
    </>
  );
}

export default App;
