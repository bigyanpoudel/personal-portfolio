import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 ">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 400: 2, 750: 2, 900: 3, 1300: 3 }}
          >
            <Masonry gutter="10px">
              {dataportfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.desctiption}</p>
                      <a href={data.link} target="_blank" rel="noopener noreferrer">view project</a>
                    </div>
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Container>
    </HelmetProvider>
  );
};
