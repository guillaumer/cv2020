import React from "react"

import {Helmet} from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/site/layout"
import useSiteMetadata from "../hooks/use-site-metadata";

const Blog = ({location}) => {
	const {title} = useSiteMetadata();
	
	return (
		 <div>
			 <Helmet>
				 <title>{title} - Blog</title>
			 </Helmet>
			 <Layout location={location}>
				 <section id="blog" className="blog">
					 <Container className="content-container">
						 <Row>
							 <Col xs={{span: 8, offset: 2}}>
								 <h2>Bientôt...</h2>
							 </Col>
						 </Row>
					 </Container>
				 </section>
			 </Layout>
		 </div>
	)
}

export default Blog
