import React, { Component } from 'react';
import axios from "axios";
const url ="";

export default class CostFilter extends Component 
{


filterCost = (event) => {
let mealId = this.props.mealId;
let cost = event.target.value.split("-");
let lcost = cost[0];
let hcost =cost[1];
let costUrl;
if(event.target.value === "")

{
    costUrl =`${url}/${mealId}`
}
else{
    costUrl=`${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
}
axios.get(costUrl).then((res)=>{this.props.restPerCost(res.data)})

    };

    render()
     {
        return (
            <div>
               <center style={{fontSize:"20px",color:"blue"}}>Cost Filter</center> 
               <div style= {{marginLeft : "12%"}} onChange = {this.filterCost}>
               
               <div>
                <label className ="radio"><input type="radio" name="cost" value=" "/>All</label>
                <label className ="radio"><input type="radio" name="cost" value="100-300"/>Rs.100-300</label>
                <label className ="radio"><input type="radio" name="cost" value="301-500"/>Rs.301-500</label>
                <label className ="radio"><input type="radio" name="cost" value="501-800"/>Rs.501-800</label>
                <label className ="radio"><input type="radio" name="cost" value="801-2000"/>Rs.801-1000</label>
                
               </div>
               
             
               </div>
            </div>
        );
    }
}

