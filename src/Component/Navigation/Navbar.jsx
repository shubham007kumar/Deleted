import React, { useState } from "react";
import {
  Container,
  Hidden,
  Input,
  SubContainer,
  Wrapper1,
  Wrapper2,
} from "./Style.js";
import {
  FaSearch,
  FaShuttleVan,
  FaStar,
  FaWallet,
  FaHeart,
  FaQuestion,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser, BiRupee } from "react-icons/bi";
import { image } from "./data.js";
import { Link, useHistory } from "react-router-dom";
import { animated, config, useSpring } from "react-spring";
import { useSelector } from "react-redux";
import { auth } from "../../Firebase.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getcartdata } from "../../Redux/Cart/action.js";
import styles from "./Navbar.module.css";
import { getbyCategory } from "../../Redux/Product/action.js";
const init = {
  title: "",
};
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [category, setCategory] = useState(false);
  const [advice, setAdvice] = useState(false);
  const Login = useSelector((state) => state.Login.Login);
  const dataList = useSelector((state) => state.Cart.dataList);
  const dispatch = useDispatch();
  const history=useHistory()
  const [cart, setCart] = useState(false);
  const [user, setUser] = useState();
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState(init);
  const { title } = search;
  const handleSearch=(e)=>{
    if(e.key === 'Enter')
    {
      history.push("/product");
      dispatch(getbyCategory(search.toUpperCase()))
    }
  
  }
  const handleBrand = () => {
    setClick((pre) => !pre);
  };
  const handleCategory = () => {
    setCategory((pre) => !pre);
  };
  const handleAdvice = () => {
    setAdvice((pre) => !pre);
  };

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  if (Login) {
    auth.onAuthStateChanged((user) => {
      setUser(user.email.slice(0, 6));
    });
  }
  const handlecart = () => {
    setCart((pre) => !pre);
  };

  let sum = 0;
  for (var i = 0; i < dataList.length; i++) {
    sum = sum + dataList[i].Price;
  }
  useEffect(() => {
    dispatch(getcartdata());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Wrapper1>
          <animated.img
            style={{ width: "100px", ...props }}
            src="https://adn-static1.nykaa.com/media/wysiwyg/HeaderIcons/NykaaLogoSvg.svg"
            alt="blank"
          />
          <p onClick={handleCategory} className="brand">
            CATEGORIES
          </p>
          <p onClick={handleBrand} className="brand">
            BRANDS
          </p>
          <p>NYKAA FASHION</p>
          <p onClick={handleAdvice}>BEAUTY ADVICE</p>
          <p>NYKAA NETWORK</p>
          <SubContainer>
            <span className="searchLogo">
              <FaSearch />
            </span>
            <Input
              type="text"
              name="title"
              value={title}
              onKeyDown={(e)=>handleSearch(e)}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search product, brands"
            />
          </SubContainer>
        </Wrapper1>

        <Wrapper2>
          <Link to="/Signup" className="accoutLink">
            <p>
              <span className="userLogo">
                <BiUser />
              </span>
              {Login ? user : "Account"}
            </p>
          </Link>
          <span className="cartLogo">
            <FiShoppingCart onClick={handlecart} />
            <div className={styles.cartcount}>
              <span className={styles.count}>{dataList.length}</span>
            </div>
          </span>
        </Wrapper2>
      </Container>
      <Hidden>
        <div className={click ? "divBlock" : "divNone"}>
          <div className="inputDiv">
            <Input type="text" placeholder="Search product, brands" />
          </div>
          <div className="imageDiv">
            <div className="buttonDiv">
              <button className="btnstyle">POPULAR</button>
              <button className="btnstyle">FEATURED</button>
              <button className="btnstyle">ONLY AT NYKAA</button>
              <button className="btnstyle">NEW LAUNCHED</button>
            </div>
            <div className="imgDiv">
              {image.map((item, index) => (
                <img src={item} alt="blank" key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className={category ? "categoryBlock" : "categoryNone"}>
          <Link to="/product" className="link">
            Makeup
          </Link>
          <Link to="/product" className="link">
            Skin
          </Link>
          <Link to="/product" className="link">
            Hair
          </Link>
          <Link to="/product" className="link">
            Appliances
          </Link>
          <Link to="/product" className="link">
            Personal Care
          </Link>
          <Link to="/product" className="link">
            Nature
          </Link>
          <Link to="/product" className="link">
            Mom & baby
          </Link>
          <Link to="/product" className="link">
            Health & Wellness
          </Link>
          <Link to="/product" className="link">
            Men
          </Link>
          <Link to="/product" className="link">
            Fragrance
          </Link>
          <Link to="/product" className="link">
            Luxe
          </Link>
        </div>
        <div className={advice ? "adviceBlock" : "adviceNone"}>
          <div className="adviceOne">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg"
              alt="blank"
            />
            <p>Beauty Look</p>
            <p>Nykaa's Digital Magazine</p>
          </div>
          <div className="adviceOne">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png"
              alt="blank"
            />
            <p>Beauty Look</p>
            <p>Nykaa's Digital Magazine</p>
          </div>
          <div className="adviceOne">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/2018/buyingguide_dropdowntile.jpg"
              alt="blank"
            />
            <p>Beauty Look</p>
            <p>Nykaa's Digital Magazine</p>
          </div>
          <div className="adviceOne">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/2019/Routine-Finder.jpg"
              alt="blank"
            />
            <p>Beauty Look</p>
            <p>Nykaa's Digital Magazine</p>
          </div>
        </div>
      </Hidden>
      <div className={cart ? styles.notcontainer : styles.container}>
        <h3 className={styles.shop}>Shopping Cart({dataList.length})</h3>
        {dataList.map((item) => {
          return (
            <div key={item.id} className={styles.Threediv}>
              <div className={styles.Onediv}>
                <img src={item.Image} alt="blank" className={styles.img} />
                <p className={styles.product}>{item.ProduceName}</p>
              </div>
              <hr className={styles.hori}></hr>
              <div className={styles.Twodiv}>
                <div className={styles.btncontainer}>
                  <button
                    className={styles.btn}
                    onClick={() => setCount((pre) => pre - 1)}
                  >
                    -
                  </button>
                  <span className={styles.spa}>{count}</span>
                  <button
                    className={styles.btn1}
                    onClick={() => setCount((pre) => pre + 1)}
                  >
                    +
                  </button>
                </div>
                <p className={styles.price}>
                  <BiRupee />
                  {item.Price}
                </p>
              </div>
            </div>
          );
        })}
        <div className={styles.Fourdiv}>
          <div className={styles.Fivediv}>
            <p>Total</p>
            <span className={styles.ruppe}>
              <BiRupee />
              {sum}
            </span>
          </div>
          <div className={styles.Sixdiv}>
            <p>PROCEED</p>
          </div>
        </div>
      </div>
      <div className={styles.sevendiv}>
        <div className={styles.eightdiv}>
          <span>
            <FaShuttleVan />
          </span>
          <p>My Order</p>
        </div>
        <div className={styles.eightdiv}>
          <span>
            <FaStar />
          </span>
          <p>My Profile</p>
        </div>
        <div className={styles.eightdiv}>
          <span>
            <FaWallet />
          </span>
          <p>My Wallet</p>
        </div>
        <Link className={styles.linkp} to="/wishlist">
          <div className={styles.eightdiv}>
            <span>
              <FaHeart />
            </span>
            <p>My Whislist</p>
          </div>
        </Link>
        <div className={styles.eightdiv}>
          <span>
            <FaQuestion />
          </span>
          <p>Q & A</p>
        </div>
      </div>
    </>
  );
};
