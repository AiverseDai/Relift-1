import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Cards from "../Cards";
import card_img from "../../assets/images/card.png";
import fetchAll from "../../middleware/fetchAll";
import { useEffect } from "react";


const PoolPage = () => {

  const [allPool, setAllPool] = useState([]);
  async function temp(){
    const data =  await fetchAll()
    // data.reverse();
    setAllPool(data);
    console.log("this is data ");

  }

  useEffect(()=>{

    temp();
    console.log(allPool,"this is allpool data");

  })

  return (
    <div>
      <div className="p-4" style={{ width: "80%", margin: "0 auto" }}>
        <Row>
          {allPool.length && allPool.map((element) => (
            <Col style={{ padding: "3rem" }} sm={4}>
              <Cards element = {element} img={card_img} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PoolPage;
