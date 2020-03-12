import React from 'react';
import logo from './logo.svg';
import './App.css';

let cards=(prop)=>{
    const {name,role}=prop
    return(
             
    <h2> {prop.name} is working as {prop.role}</h2>
    )
}
export default cards;