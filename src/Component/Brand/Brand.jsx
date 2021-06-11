import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { data, data1 } from "./data.js";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../Redux/Product/action.js";
import styles from "./Brand.module.css";
import styled from "styled-components";
import { Slide } from "../ImageSlider/Slide";
import { VscLoading } from "react-icons/vsc";
import { BiRupee } from "react-icons/bi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination.jsx";
import { Footer } from "../Footer/Footer";

const Div = styled.div`
  background-color: #eceff1;
`;

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  root: {
    width: "120%",
  },
}));

export const Brand = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Product.productList);
  const isLoading = useSelector((state) => state.Product.isLoading);
  const [page, setPage] = useState(1);
  const limit = 5;
  const lastindex = page * limit;
  const firstindex = lastindex - limit;
  const currentproduct = product.slice(firstindex, lastindex);

  const handleChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(get());
  }, [dispatch, page]);

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <Div>
      <Slide />
      <p className={styles.downslide}>All Product</p>
      <div className={styles.maincontainer}>
        <div>
          <div className={classes.root}>
            <div>
              {data.map((item) => {
                const {id, heading, details } = item;
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
                        {details.map((item,index) => {
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
            <div>
              {data1.map((item) => {
                const { id,heading, details } = item;
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
                        {details.map((item,index) => {
                          return (
                            <div key={index}>
                              <input type="checkbox" value={item} />
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
              currentproduct.map((item) => {
                return (
                  <div key={item.id} className={styles.container}>
                    <img
                      className={styles.imagecontainer}
                      src={item.Image}
                      alt="blank"
                    />
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
                      <AiOutlineHeart />
                      <div className={styles.addcart}>Add to Cart</div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Pagination product={product} limit={limit} handleChange={handleChange} />
      <Footer />
    </Div>
  );
};
