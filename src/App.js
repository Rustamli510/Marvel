import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Thumbnail from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './Character';
import { Route, Routes } from 'react-router-dom';
import Comics from './Comics';
import Info from './Info';
import ComicsInfo from './ComicsInfo';

function App() {
  const [data, setData] = useState([])

  const Heros = () => {
    axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92').then(res => setData(res.data.data.results))
  }

  useEffect(() => {
    Heros()
  }, [])

  console.log(data);

  return (
    <>
    <Thumbnail />
    <Routes>
      <Route path='/' element={<Character data={data} />}/>
      <Route path='/Comics' element={<Comics />}/>
      <Route path='/:id' element={<ComicsInfo/>}/>
    </Routes>
    </>
  )
}

export default App