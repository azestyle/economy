import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { CardContext } from "../homepage/home";
let logo = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    title: "Login",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Register",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    title: "Cart",
  },
];

function HeaderButton() {
    // const [count,setCount] = React.useState(0);


    const count = useContext(CardContext);


  return (
    <div className="button-box">
      <ul>
        {logo.map((el) => {
            if(el.title=== 'Cart'){
                return  <li key={el.id}>
                <a href="#">
                  {el.icon}
                  {el.title}
                  {count.cardCount}
                </a>
              </li>
            }
          return (
            <li key={el.id}>
              <a href="#">
                {el.icon}
                {el.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HeaderButton;
