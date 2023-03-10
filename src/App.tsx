import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

import './App.css';
import { ShowsData } from './Components/AllMovies/AllDataMovies';
import { NavigationBar } from './Components/NAvigationComponent';
import { PeoplesData } from './Components/PeoplesData/peopleData';
import { MovieDetails } from './Components/singleMovie/SingleMovie';
import { Web } from './Components/WebChannel/WebChannels';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
   <>
     
     <Provider store={store}>
<BrowserRouter>
<NavigationBar/>

<Routes>
  <Route path='/' element={<ShowsData/>} />
    <Route path="people" element={<PeoplesData/>}></Route>
    <Route path="Web" element={<Web/>}></Route>
    <Route path='/details/:id' element={<MovieDetails/>}></Route>
               
</Routes>
</BrowserRouter>
</Provider>
   </>
  );
}

export default App;
