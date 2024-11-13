import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser ,faCartShopping} from '@fortawesome/free-solid-svg-icons';
let logo = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        title: 'Login'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Register'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Cart'
    }
];

function HeaderButton(){
    return(
        <div className="button-box">
            <ul>
               {logo.map((el)=>{
               return <li key={el.id}><a href="#">{el.icon}{el.title}</a></li>
               })} 
               
            </ul>
          
        </div>
    )
}

export default HeaderButton;