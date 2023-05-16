import React, { Component } from 'react';
import axios from   'axios';
import {OrderDisplay} from "./OrderDisplay"
const url="http://localhost:7001";




export default class ViewOrder extends Component {
    constructor()
    {
        super();
        this.state={
            orders:"",

        };
    }
    render() {
        return (
            <div>
                <OrderDisplay orderData={this.state.orders}/>
         
            

           
            </div>
        );
    }

    componentDidMount()
    {
        if(this.props.location)
        {
            let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(",")[1]:[];
          axios.get(`${url}/Orders?email=${email}`).then((res)=>{this.setState({orders:res.data});
        });
    }
    }
}


