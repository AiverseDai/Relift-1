import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Disaster_img from "../../assets/images/disaster.png";
import { disasterList, icons } from "../../utils/data.js/data";
import Cards from "../Cards";
import SmallCards from "../Cards/SmallCards";
import Footer from "../Footer";
import card_img from "../../assets/images/card.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import fetchToppool from "../../middleware/fetchToppool";
import { useState } from "react";

const Home = () => {


  const [poolData, setpoolData] = useState([]);

  const temp = async () => {
    const data = await fetchToppool();
    console.log(data, "ffffff");
    setpoolData(data);
  };
  useEffect(() => {
    temp();
    console.log(poolData.length,"we did it!");
  }, []);

  return (
    <div>
      <div className="carousel">
        <Carousel slide={true} controls={false}>
          {[1, 2, 3].map(() => (
            <Carousel.Item className="carousel-imgWrapper">
              {/* <img
                className="carousel-img"
                src={Disaster_img}
                alt="First slide"
              /> */}
              <div
                className="carousel-img"
                style={{
                  background: `linear-gradient(270deg, rgba(0, 0, 0, 0.76) 37.36%, rgba(0, 0, 0, 0.03) 95.28%), url(${Disaster_img})`,
                }}
              />
              {/* <div
                className="carousel-img"
                style={{
                  backgroundImage: `url(${Disaster_img})`,
                }}
              ></div> */}
              <Carousel.Caption className="carousel-caption">
                <div className="details">
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      textTransform: "uppercase",
                      fontSize: "36px",
                      paddingBottom: "2rem",
                    }}
                  >
                    Emergency Declared
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "50px",
                      fontFamily: "Barlow",
                    }}
                  >
                    Bengaluru: Affected by the floods?
                  </p>
                  <div className="bannerText-section">
                    <p
                      className="bannerText"
                      // style={{
                      //   fontSize: "1.4rem",
                      //   padding: "10px",
                      //   wordWrap: "break-word",
                      // }}
                    >
                      Let’s come together for those affected by floods in
                      #Bengaluru
                    </p>
                  </div>

                  {/* <button type="button" className="carousel-btn"> */}
                  <NavLink
                    className="btn cho"
                    to="/request_fund"
                    activeclassname="active"
                  >
                    Request Fund
                  </NavLink>
                  <NavLink
                    className="btn cho"
                    to="/poolPage"
                    activeclassname="active"
                  >
                    Donate
                  </NavLink>
                  {/* </button> */}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p className="helperText">Bengaluru needs support !!</p>
                      <div className="iconsSection">
                        {icons.map((icon) => (
                          <div key={icon.id} className="banner-icons">
                            <img src={icon.icon} alt={icons.name} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="main-container">
        <h1 className="mainTitle">Latest 3 Fundraiser</h1>
        <p className="fundDesc">
          Here are some fundraisers for active calamities
        </p>
        <div className="p-4" style={{ width: "80%", margin: "0 auto" }}>
          <Row>
            {poolData.length && poolData.map((element) => (
              <Col style={{ padding: "3rem" }} sm={4}>
                <Cards element={element} img={card_img} />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* funds section */}
      <div className="funds-section">
        <p className="fundTitle">We provide funds for</p>
        <p className="fundDesc">
          We provide funds for those who affected by natural calamities
        </p>

        <div className="fundList">
          {disasterList
            .filter((v) => v.id !== disasterList.length)
            .map((list) => (
              <SmallCards
                name={list?.name}
                img={list?.img}
                style={{ margin: " 2rem 4rem" }}
              />
            ))}
        </div>
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
