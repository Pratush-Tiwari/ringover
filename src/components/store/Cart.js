import React, { useState } from "react";
import "./storeshoe.css";
import cart from "../images/carticon.png";
import { useParams } from "react-router-dom";
import { Shoedata } from "./Shoedata";
import { Cartdata } from "./Cartdata.js";
import { NavLink } from "react-router-dom";

const Cart = ({datacart,removecart}) => {

  console.log(removecart)
  const idm = useParams("");

  console.log("this is id", idm);

 

  return <div>
    <div className="cartdiv">
          <div className="filterdivheader">
            <div>
              <p>CART</p>
            </div>
            <div>
              <p>
                <img src={cart} style={{ width: 50 }} alt=""></img>
              </p>
            </div>
          </div>

          <div className="cartshoes">
            {datacart?.map((e) => {
              return (
                <div className="cartcontent">
                  <button id={e.id} onClick={() => removecart(e.id)}>
                    ❌
                  </button>
                  <img src={e.url} alt=""></img>
                  <div>
                    <h4>{e.name}</h4>
                    <p>by KICKSUP and you</p>
                    <br></br>
                    <h5>{e.price}</h5>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="des">
            <div className="designer">What's stopping you, designer?</div>
            <div className="ordernow">
              <button>order now</button>
            </div>
          </div>
        </div>
  </div>;
};

export default Cart;
