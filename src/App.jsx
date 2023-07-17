import React,{Component} from "react";
// import {FaHeart } from "react-icons";
import C1 from "./components/C1.jsx";
import C2 from "./components/C2.jsx";
import C3 from "./components/C3.jsx";
import "./style.css";
export default class App extends Component{
    render()
    {
        return(
            <div className="App">
                <section>
                <C1></C1>
                <C2></C2> 
            </section>
            <section>
            <C3></C3>
            </section>
            </div>
            
        )
    }
}
