import React from "react";
import Header from "../Header";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.css';
function Layout(props) {
  return (
    <>
      <Header />
      {
        props.sidebar ? 
      
        <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li>
                <NavLink to={"/addproduct"}>Add Product</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/categories"}>Categories</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
          {props.children}
          </Col>
        </Row>
      </Container>
      : props.children
      } 
    </>
  );
}

export default Layout;
