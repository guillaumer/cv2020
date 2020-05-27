import React from "react"

import {Helmet} from "react-helmet"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Home() {
    return (
        <div>
            <Helmet>
                <title>Guillaume Raoult - Développeur web</title>
                <meta name="description" content="Guillaume Raoult, développeur web à Toulouse"/>
                <meta name="theme-color" content="#008f68"/>
            </Helmet>
            <Container fluid>
                <Row noGutters>
                    <Col>
                        <Row className="background_cont">
                            <Col xs={12} className="align-items-center mt-auto">
                                <h1>GUILLAUME RAOULT</h1>
                                <h2>Développeur web</h2>
                                <p>En construction<span className="ellipsis"></span>
                                </p>
                                <Button variant="outline-dark" href="https://cv.ergeais.com">Version 2014</Button>
                            </Col>
                            <Col xs={12} className="align-items-center mt-auto footer">
                                <p>
                                    Fait avec <span>♥</span> et <a href="https://www.gatsbyjs.org/"
                                                                   target="_blank" rel="noreferrer">GatsbyJS</a> à
                                    Toulouse
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home