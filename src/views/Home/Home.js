import React,{useState} from 'react';
import {MAGIC_WORD} from 'consts/magic_word';
import useAuthContext from 'hooks/useAuthContext';
import HomeView from './HomeView';


function Home() {
  const {login} = useAuthContext();
  const[magicWord, setMagicWord] = useState(''); 
  const[error, setError] = useState(''); 

  function handleInputChange(event) {
    setMagicWord(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    magicWord === MAGIC_WORD ? login() : setError(`La palabra introducida ${magicWord} es incorrecta`);
  }

  return (
    <HomeView palabraIntroducida={magicWord} handleSubmit={handleSubmit} handleInputChange={handleInputChange} error = {error}  />
  );
  
}
export default Home;

