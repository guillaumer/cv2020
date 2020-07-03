import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import Img from "gatsby-image";
import Col from "react-bootstrap/Col";

const Header = () => {
	
	const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "background.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1024, maxHeight: 200, grayscale: true, cropFocus: NORTH) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
	`)
	
	return (
		 <Col xs={12}>
			 <Img fluid={data.file.childImageSharp.fluid} width="100%"/>
		 </Col>
	)
}

export default Header
