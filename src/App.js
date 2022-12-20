import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import List from './components/List.jsx';
export default function App() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => response.json())
      .then((response) => {
        console.log('Response: ', response);
        setPokemon(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);
  return <div>{loading ? <Loader /> : <List data={pokemon}/>}</div>;
}
