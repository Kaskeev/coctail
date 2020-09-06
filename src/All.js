import React from 'react'
import "./All.css"
import {Link} from 'react-router-dom'

 
 function All (props){

    return(
        <div className="divCard">
            <Link to={'/coctail/'+props.coctail.strDrink}>
                <img style={{width:'250px'}} src={props.coctail.strDrinkThumb}/>
                <h4>{props.coctail.strDrink}</h4>
            <a href="a" className="buttonShare">Подробнее</a>
            </Link>
        </div>
    )
}
export default All

