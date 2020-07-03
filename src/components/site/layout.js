import React from "react"

import Header from "./header"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Sidebar from "./sidebar";
import Footer from "./footer";
import useSiteMetadata from "../../hooks/use-site-metadata";
import {Helmet} from "react-helmet";

const Layout = ({children, location}) => {
	const {description, color} = useSiteMetadata();
	
	return (
		 <div>
			 <Helmet>
				 <meta name="description" content={description}/>
				 <meta name="theme-color" content={color}/>
			 </Helmet>
			 <Row className="d-flex no-gutters">
				 <Col xs={12} lg={3}>
					 <Sidebar location={location}/>
				 </Col>
				 <Col xs={12} lg={9}>
					 <Row className="no-gutters">
						 <Header/>
						 {children}
						 <Footer/>
					 </Row>
				 </Col>
			 </Row>
		 </div>
	)
}

export default Layout
