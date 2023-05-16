import React, { Component } from 'react';
import QuickDisplay from "./QuickDisplay.js";
import "./QuickSearch.css";
const qurl="http://localhost:7001/MealType"

class QuickSearch extends Component {


    constructor()
    {
        super()
        
            this.state={
                mealType:""
            }
        
    }
    render() {
        return (
            <div id ="quickSearch">
                <span id="quickHeading">QuickSearch</span>
                <span id ="quickSubHeading">Discover Restaurants by type</span>
                <QuickDisplay mealData ={this.state.mealType}/>
                
            </div>
        );
    }

    componentDidMount()
    {
        fetch(qurl,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>
        {
            this.setState({mealType:data});
            console.log(data)

        })
        }
    }


export default QuickSearch;