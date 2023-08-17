import logo from './logo.svg';
import './App.css';
import { Home, User } from "./User";
import {BrowserRouter, From, Route, Routes} from "react-router-dom";

function App() {
  const array = [10,20,30,40,50];

  const userName = "rahul";
   const theme = createTheme(
    {
      palette: {
        primary: {
          main : "#d32f2f"
        },
      secondary: {
        main :"#ffff"
      }
      }
    }
   )
  
  return (
    
    <BrowserRouter>
     <div className= "App">


      <header> this is header </header>
      <routes>

      <route path ="/" element= {< Home />}/>        
      <route path ="/User" element= {<user name = {userName} age={42} />}/>
      </routes>

      <footer>This is footer</footer>
      
      
      



      </div>
      </BrowserRouter>
      

  );


}

export default App;
