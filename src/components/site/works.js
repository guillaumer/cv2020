import React from "react"
import {graphql, StaticQuery} from "gatsby"

import Gallery from "./gallery";

const Works = () => {
	return (
		 <div>
			 <StaticQuery
				  query={graphql`
							{
								allWorksYaml {
									edges {
										node {
											title
											desc
											tech
											id
											image {
										  		childImageSharp {
													fluid {
													  ...GatsbyImageSharpFluid
													}
												}
											}
								  		}
									}
							  	}
							}
					  	  `}
				  render={data => (
					   <Gallery
							projects={data.allWorksYaml.edges.map(({node}) => ({
								...node.image.childImageSharp.fluid,
								key: `${node.id}`,
								caption: `${node.title}`,
								desc: `${node.desc}`,
								tech: `${node.tech}`,
							}))}
					   />
				  )}
			 />
		 </div>
	)
}

export default Works
