import React, { Component } from 'react';
import "./Search.css";
const lurl ="http://localhost:7001/location"
const rurl ="http://localhost:7001/RestaurantData?stateId="

export default class Search extends Component {

    constructor()
    {
        super();


        this.state ={

            locations:"",
            restaurants:"",
        };
    }


    renderCity = (data) =>
    {
        if(data)
        {
            return data.map((item)=>
        {

            return(

                <option key ={item._id} value= {item.state_id}>
                    {item.name}

                </option>
            )
        } );
               
    }
};


renderRest = (data) =>
{
    if(data)
    {
    return data.map((item) =>
    {

        return(
            <option value= {item.restaurant_id}>{item.restaurant_name}|{item.address} </option>
        )

    }
    )
}
}


handleCity =(event) =>
{
    const stateId = event.target.value;
    fetch(`${rurl}${stateId}`,{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>
    {
        this.setState({restaurants:data})
        console.log(data)
    })
}
    render() {
        return (
            <>

<div id ="search">
    <div id="logo">
<span>
    e!
</span>
    </div>

    <div id ="text-style">
        <p>Find the best restaurants,cafes,bars </p>
    </div>
<div id ="dropdown">
    <select onChange ={this.handleCity}>
    {/* <select > */}

        <option>SELECT A LOCATION</option>
        {this.renderCity(this.state.locations)}
    </select>
    <select>
        <option>
            SELECT RESTAURANT
        </option>
        {this.renderRest(this.state.restaurants)}
    </select>

</div>

                
</div>
            </>
        
        );
    }

    componentDidMount()
{
    fetch(lurl,{method:"GET"})
    .then((res)=>res.json())
    .then((data) =>
    {
        this.setState({locations:data});
        console.log(data);
    })
}

}


