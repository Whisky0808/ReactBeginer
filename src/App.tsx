import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Login} from './pages/Login';
import {Main} from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/CreatePost';



function App() {

  return (
    <div className="App">
      <Provider store={store}>

      <Router>
        <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
      </Routes>

      </Router>
      </Provider>

    </div>
   
  )
}

export default App;
