import React, { useState } from "react";
import "./storeshoe.css";
import { useParams } from "react-router-dom";
import { Shoedata } from "./Shoedata";
import { Cartdata } from "./Cartdata.js";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";


const Storeshoe = ({datacart,setDatacart,idm,setshow,removecart}) => {
  

  console.log("this is id", idm);

  const [selected, setSelected] = useState("");


  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const addtocart = (e) => {
    if (!datacart.find((i) => i.id === e.id)) {
    setDatacart([...datacart, e]);
    console.log(datacart);}
  };
  
  return (
    <div>
      <div className="shoe">
        <div className="left">
          <div className="leftheader">
            <button onClick={()=>setshow(0)}>
              <p>&#8249;</p>
              </button> 
            <p className="designp">your design space</p>
          </div>

          {Shoedata?.map((e) => {
            if (e.id === idm) {
              return (
                <div className="leftbody">
                  <div className="limage">
                    <img src={e.url} alt=""></img>
                  </div>
                  <div className="limages">
                    <img src={e.url} alt=""></img>
                    <img src={e.url} alt=""></img>
                    <img src={e.url} alt=""></img>
                  </div>
                  <div className="rdetails">
                    <div>
                      <h1>{e.name}</h1>
                      <h2>by KICKSUP and you</h2>
                    </div>
                    <div>
                      <p>star</p>
                      <p>{e.review}</p>
                    </div>
                    <div>
                      <h2>{e.price}</h2>
                      <p>get an exclusive 20% off shopingith HDFC bank</p>
                    </div>

                    <div className="boxes">
                      <h5>Front</h5>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="option1"
                          checked={selected === "option1"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="option2"
                          checked={selected === "option2"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="option3"
                          checked={selected === "option3"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="boxes">
                      <h5>Middle</h5>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="middle1"
                          checked={selected === "middle1"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="middle2"
                          checked={selected === "middle2"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="middle3"
                          checked={selected === "middle3"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="boxes">
                      <h5>Back</h5>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="back1"
                          checked={selected === "back1"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="back2"
                          checked={selected === "back2"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box">
                        <input
                          type="checkbox"
                          value="back3"
                          checked={selected === "back3"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="boxes">
                      <h5>Sole</h5>
                      <div className="boxsole">
                        <input
                          type="checkbox"
                          value="sole1"
                          checked={selected === "sole1"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="boxsole">
                        <input
                          type="checkbox"
                          value="sole2"
                          checked={selected === "sole2"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="boxsole">
                        <input
                          type="checkbox"
                          value="sole3"
                          checked={selected === "sole3"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="boxes">
                      <h5>Size</h5>
                      <div className="boxsize">
                        <input
                          type="checkbox"
                          value="size1"
                          checked={selected === "size1"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="boxsize">
                        <input
                          type="checkbox"
                          value="size2"
                          checked={selected === "size2"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="boxsize">
                        <input
                          type="checkbox"
                          value="size3"
                          checked={selected === "size3"}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="boxsize">
                        <input
                          type="checkbox"
                          value="size4"
                          checked={selected === "size4"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="starp">
                    <p style={{ marginLeft: 30, marginBottom: 30 }}>
                      Rate Product{" "}
                      <span style={{ color: "orange" }}>
                        &#9734;&#9734;&#9734;&#9734;&#9734;
                      </span>
                    </p>
                  </div>
                  <div className="leftfooter">
                    <button>share design</button>
                    <button
                      onClick={() =>
                        addtocart({
                          id: `${e.id}`,
                          url: `${e.url}`,
                          name: `${e.name}`,
                          price: `${e.price}`,
                          review: `${e.review}`,
                        })
                      }
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <Cart datacart={datacart} removecart={removecart}></Cart>
        {/* <div className="cartdiv">
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
            {datacart.map((e) => {
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
        </div> */}
      </div>
    </div>
  );
};

export default Storeshoe;
