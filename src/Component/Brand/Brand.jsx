import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { data, data1 } from "./data.js";
import { useDispatch, useSelector } from "react-redux";
import { get, getbyCategory } from "../../Redux/Product/action.js";
import styles from "./Brand.module.css";
import styled from "styled-components";
import { Slide } from "../ImageSlider/Slide";
import { VscLoading } from "react-icons/vsc";
import { BiRupee } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination.jsx";
import { Footer } from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import { sendWishlist } from "../../Redux/Wishlist/action.js";
import { cart } from "../../Redux/Cart/action.js";


//styled component
const Div = styled.div`
  background-color: #eceff1;
`;

//material-ui
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  root: {
    width: "120%",
  }
}));

//function Component 

export const Brand = () => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.Product.productList);
  const isLoading = useSelector((state) => state.Product.isLoading);
  const Login = useSelector((state) => state.Login.Login);
   //sort by discount
   const [sortbycost,setSorbycost]=useState(null)
   const sortcondition=(a,b)=>{
    if(sortbycost === null){
      return null
    }
    if(sortbycost === "Discount")
    {
      return b.Discount-a.Discount
    }

    if(sortbycost === "Price")
    {
      return a.Price-b.Price
    }
    if(sortbycost === "Rating")
    {
           return b.Rating-a.Rating
    }
  }
  // for pagination
  const [page, setPage] = useState(1);
  const limit = 6;
  const lastindex = page * limit;
  const firstindex = lastindex - limit;
  const currentproduct = productList.slice(firstindex, lastindex);
  
  //function for changing page no 
  const handleChange = (page) => {
    setPage(page);
  };

  const handleClick = (e) => {
    const value=e.target.value
    if(e.target.checked)
    {
      setQuery(value)
      dispatch(getbyCategory(query))
    }
  };
 
  //function for adding product to whislist
  let history = useHistory();
  const handleWishlist = (data) => {
    if (!Login) {
      let path = "/login";
      history.push(path);
    }
    dispatch(sendWishlist(data));
  };

  //function for adding product to cart
  const handleCart = (data) => {
    dispatch(cart(data));
  };
  useEffect(() => {
    dispatch(get());
  }, [dispatch]); 
  return (
    <Div>
      <Slide />
      <p className={styles.downslide}>All Product</p>
      <div className={styles.maincontainer}>
        <div>
          <div className={classes.root}>
            <div>
              {data.map((item) => {
                const { id, heading, details } = item;
                return (
                  <Accordion key={id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {heading}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {details.map((item, index) => {
                          return (
                            <div key={index}>
                              <input
                               value={item}
                                type="checkbox"
                                onClick={()=>setSorbycost(item)}
                              />
                              {item}
                            </div>
                          );
                        })}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div>
              {data1.map((item) => {
                const { id, heading, details } = item;
                return (
                  <Accordion key={id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {heading}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {details.map((item, index) => {
                          return (
                            <div key={index}>
                              <input
                                type="checkbox"
                                value={item}
                                onClick={handleClick}
                              />
                              {item}
                            </div>
                          );
                        })}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.productcontainer}>
          <div className={styles.subcontainer}>
            {isLoading ? (
              <div className={styles.loading}>
                <VscLoading />
              </div>
            ) : (
              currentproduct &&
              currentproduct.sort(sortcondition).map((item) => {
                return (
                  <div key={item.id} className={styles.container}>
                    <img
                      className={styles.imagecontainer}
                      src={item.Image}
                      alt="blank"
                    />
                    <p className={styles.category}>{item.category}</p>
                    <p className={styles.namecontainer}>{item.ProduceName}</p>
                    <p className={styles.pricecontainer}>
                      MRP: <BiRupee />
                      {item.Price} | {item.Discount}% off
                    </p>
                    <p className={styles.namecontainer}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                      <FaStarHalfAlt /> {item.Rating}
                    </p>
                    <div className={styles.hide}>
                      <div onClick={() => handleWishlist(item)}>
                        {item.Wishlist ? (
                          <BsFillHeartFill className={styles.heart} />
                        ) : (
                          <AiOutlineHeart/>
                        )}
                      </div>
                      <div
                        className={styles.addcart}
                        onClick={() => handleCart(item)}
                      >
                        Add to Cart
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Pagination product={productList} limit={limit} handleChange={handleChange} />
      <Footer />
    </Div>
  );
};
