import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.jpg";

const Contact = () => {
  return (
    <Helmet title="Product-details">
      <CommonSection title="Ajuda" banner="help"/>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Deu merda?</h5>
                <h1 className="mb-4 hero__title">
                  <span>Ficaste sem o dinheiro </span>
                  <br/>
                  Manda mensagem no discord, canal #nerdway
                </h1>

                <p>
                  Isto de estar com as coisas em produção à pouco tempo é complicado, mas estamos a tentar resolver o mais rápido possível.
                </p>

                {/* <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/foods">Comprar snacks <i class="ri-arrow-right-s-line"></i> </Link>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/charge">Carrega saldo</Link>
                  </button>
                </div> */}

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    Completamente interno
                  </p>
                </div>
              </div>
            </Col>
            {/* Imagem lateral */}
             <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
