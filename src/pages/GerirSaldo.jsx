import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const GerirSaldo = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Gerir Saldo">
      <CommonSection title="Gerir Saldo" />
      <section>
        <Container>
          <Row>

            <Col lg="8" md="6">
              <p> Adicionar saldo </p> 
              <input type="number" min="0.01" max="50.00" step="0.01" /> 
            </Col>
            <Col lg="4" md="6">
              <p> Saldo Atual</p> 
              <input type="number" min="0.01" max="50.00" step="0.01" /> 
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="6">
              <div className="cart__page-btn">
                <button className="addTOCart__btn">
                  Pay
                </button>

                <button className="addTOCart__btn me-4">
                  Cancel
                </button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default GerirSaldo;
