import { React } from 'react';
import './App.css';
import CurrentTime from './CurrentTime/CurrentTime';
import Clock from './Clock/Clock';
import Event from './Event/Event';
import Forms from './Forms/Forms';
import TodoList from './TodoList/TodoList';
import InDe from './InDe/InDe';
import InDeUsingMU from './InDeUsingMU/InDeUsingMU';
import PockemonApi from './PockemonApi/PockemonApi';
import HomePage from './HomePage/HomePage';
import ContactAboutPage from './ContactAboutPage/ContectAboutPage';
import { Route, Switch} from 'react-router-dom';
import Navbar from './HomePage/Navbar';



function App() {


  return (
   <>
  
  <Navbar/>
   <Switch>
     <Route path= "/" exact  component = {HomePage} />
     <Route path= "/contact" render = {()=> <ContactAboutPage name = "contect" dis=" Contact me at a....@gamil.com" /> } />
     <Route path= "/about" render = {()=> <ContactAboutPage name = "about" dis=" Abhishek Patel Here" /> } />
     <Route path= "/clock"  component = {Clock} />
     <Route path= "/currentTime"  component = {CurrentTime} />
     <Route path= "/event"  component = {Event} />
     <Route path= "/form"  component = {Forms} />
     <Route path= "/pockemonApi"  component = {PockemonApi} />
     <Route path= "/incrementDecrement"  component = {InDe} />
     <Route path= "/todoList"  component = {TodoList} />
     <Route path= "/incrementDecrementMu"  component = {InDeUsingMU} />

   </Switch>

   </>
  );
}

export default App;
