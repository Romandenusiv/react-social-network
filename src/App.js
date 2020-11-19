import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Posts from './components/Content/Posts/Posts';
import Profile from './components/Content/Avatarprofile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';




const App = (props) => {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <div class='app-wrapper-content'>   
        <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.forum.dialogs} messages={props.state.forum.messages}/> }/>
        <Route path='/profile' render={ () => <Profile/>}/>
        <Route path='/content' render={ () => <Content/>}/>
      </div>
    </div>  
  </BrowserRouter>


  );
}

export default App;
