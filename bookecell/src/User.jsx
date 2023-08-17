import { NavLink } from "react-router-dom";

export const User =({name , age  }) => {
    return(
    <h1> This is user component {name} {age}
 <NavLink to="/" >Home</NavLink> </h1>

);
};

export const Home = () => {
 return(
    <h1> 
         Home component < NavLink to= "/user ">user</NavLink>
    </h1>
 );   


};
