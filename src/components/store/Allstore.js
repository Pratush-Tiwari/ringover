import React, { useEffect, useState } from "react";
import styles from "./allstore.module.css";
import filter from "../images/filter.png";
import search from "../images/search.png";
import { Shoedata } from "./Shoedata";
import Cart from "./Cart";
import Storeshoe from "./Storeshoe";
import { Cartdata } from "./Cartdata";

const Allstore = () => {
  ///////// sort
  const [sortMethod, setSortMethod] = useState("asc");
  const sortedProducts = [...Shoedata].sort((a, b) => {
    if (sortMethod === "asc") {
      return a.price - b.price;
    } else if (sortMethod === "") {
      return;
    } else {
      return b.price - a.price;
    }
  });

  ////////

  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sortedProducts);

  const [selected, setSelected] = useState("");
  const [cselected, setcSelected] = useState("");
  const [dselected, setdSelected] = useState("");
  const [tselected, settSelected] = useState("");

  const [price, setprice] = useState(0);
  const [color, setcolor] = useState("");
  const [design, setdesign] = useState("");
  const [type, settype] = useState("");

  console.log(color);

  const [applyfilter, setapplyfilter] = useState(0);

  const apply = () => {
    setprice(price);
    setcolor(color);

    setSelectedColor(color);
    setSelectedPrice(price);
    console.log("jvgvvvgvggvvggvv", setcolor);
    setdesign(design);
    settype(type);
    setapplyfilter(1);

    let filteredList = sortedProducts;
    if (selectedColor) {
      filteredList = filteredList.filter(
        (product) => product.color === selectedColor
      );
    }
    if (selectedPrice == 1500) {
      filteredList = filteredList.filter(
        (product) => product.price >= 1500 && product.price <= 4000
      );
    }
    if (selectedPrice == 4001) {
      filteredList = filteredList.filter(
        (product) => product.price >= 4001 && product.price <= 7000
      );
    }
    setFilteredProducts(filteredList);
  };

  useEffect(() => {}, [price, color, applyfilter]);

  console.log(price);

  const handleChange = async (e) => {
    setSelected(e.target.value);
    setprice(e.target.value);
  };
  const colorchange = (e) => {
    setcSelected(e.target.value);
    setcolor(e.target.value);
  };
  const designChange = (e) => {
    setdSelected(e.target.value);
    setdesign(e.target.value);
  };
  const typeChange = (e) => {
    settSelected(e.target.value);
    settype(e.target.value);
  };

  const [shoesid, setshoesid] = useState("");
  const [show, setshow] = useState(0);

  const showfun = (e) => {
    setshow(1);
    setshoesid(e.id);
  };

  const removecart = (id) => {
    console.log("remove cart");
    setDatacart(datacart.filter((item) => item.id !== id));
    console.log(datacart);
  };

  const [datacart, setDatacart] = useState(Cartdata);

  ////////search
  const [data, setData] = useState(Shoedata);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {show ? (
        <Storeshoe
          datacart={datacart}
          setDatacart={setDatacart}
          idm={shoesid}
          setshow={setshow}
          removecart={removecart}
        />
      ) : (
        <div>
          <div className={styles.all}>
            <div className={styles.filterdiv}>
              <div className={styles.filterdivheader}>
                <div>
                  <p>FILTERS</p>
                </div>
                <div>
                  <p>
                    <img src={filter} alt=""></img>
                  </p>
                </div>
              </div>
              <div className={styles.remaining}>
                <p>Cost</p>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      value="1500"
                      checked={selected === "1500"}
                      onChange={handleChange}
                    />
                    <p>Rs. 1500-4000</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="4001"
                      checked={selected === "4001"}
                      onChange={handleChange}
                    />
                    <p>Rs. 4001-7000</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="7001"
                      checked={selected === "7001"}
                      onChange={handleChange}
                    />
                    <p>Rs. 7001+</p>
                  </div>
                </div>
                <p>Colour</p>
                <div className="color">
                  <div>
                    <input
                      type="checkbox"
                      value="red"
                      checked={cselected === "red"}
                      onChange={colorchange}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      value="blue"
                      checked={cselected === "blue"}
                      onChange={colorchange}
                    />
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      value="yellow"
                      checked={cselected === "yellow"}
                      onChange={colorchange}
                    />
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      value="green"
                      checked={cselected === "green"}
                      onChange={colorchange}
                    />
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      value="gold"
                      checked={cselected === "gold"}
                      onChange={colorchange}
                    />
                  </div>
                </div>
                <p>Design Templates</p>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      value="2"
                      checked={dselected === "2"}
                      onChange={designChange}
                    />
                    <p>2</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="3"
                      checked={dselected === "3"}
                      onChange={designChange}
                    />
                    <p>3</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="4"
                      checked={dselected === "4"}
                      onChange={designChange}
                    />
                    <p>3+</p>
                  </div>
                </div>
                <p>Type</p>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      value="Loafers"
                      checked={tselected === "Loafers"}
                      onChange={typeChange}
                    />
                    <p>Loafers</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="Sneakers"
                      checked={tselected === "Sneakers"}
                      onChange={typeChange}
                    />
                    <p>Sneakers</p>
                  </div>
                </div>
              </div>
              <div className={styles.filterbutton}>
                <button onClick={() => apply(price, color, design, type)}>
                  apply
                </button>
              </div>
            </div>
            <div className={styles.shoediv}>
              <div className={styles.shoedivheader}>
                <div>
                  <p>SHOES</p>
                </div>
                <div>
                  <p>
                    <button
                      onClick={() => setShowSearchInput(!showSearchInput)}
                    >
                      <img src={search} alt=""></img>
                    </button>

                    {showSearchInput && (
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    )}
                  </p>
                  <select
                    value={sortMethod}
                    onChange={(e) => setSortMethod(e.target.value)}
                  >
                    <option value="">sort by</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </div>
              <div className={styles.shoedivbody}>
                {
                  // Shoedata?.map((e) => {
                  filteredProducts?.map((e) => {
                    return (
                      <button onClick={() => showfun(e)}>
                        <div className={styles.shoecard}>
                          <img src={e.url} alt=""></img>
                          <p>{e.name}</p>
                          <div>
                            <p>Rs. {e.price}/-</p>
                            <p>
                              <span style={{ color: "orange" }}>
                                &#9734;&#9734;&#9734;&#9734;&#9734;
                              </span>
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })
                }
              </div>
            </div>
            {/* <div className={styles.cartdiv}>
          <div className={styles.filterdivheader}>
            <div>
              <p>CART</p>
            </div>
            <div>
              <p>
                <img src={cart} alt=""></img>
              </p>
            </div>
          </div>
          <div>What's stopping you, designer?</div>
          <div>
            <button>order now</button>
          </div>
        </div> */}
            <Cart datacart={datacart} removecart={removecart}></Cart>
          </div>
        </div>
      )}
    </>
  );
};

export default Allstore;
