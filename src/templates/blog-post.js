import React from "react"
import {Link} from "gatsby"

import Layout from "../components/site/layout"

const Template = ({pageContext, location}) => {
	const {node, next, previous} = pageContext
	const NextArticle = next && (
		 <Link to={next.frontmatter.path} style={{maxWidth: '25%'}}>
			 <strong>Next Article</strong> <br/>
			 {next.frontmatter.title}
		 </Link>
	)
	
	const PrevArticle = previous && (
		 <Link to={previous.frontmatter.path} style={{maxWidth: '25%'}}>
			 <strong>Previous Article</strong> <br/>
			 {previous.frontmatter.title}
		 </Link>
	)
	return (
		 <Layout location={location}>
			 <article>
				 <h1>{node.frontmatter.title}</h1>
				 <p className="meta">{node.frontmatter.date}</p>
				 <div
					  className="blog-post-content"
					  dangerouslySetInnerHTML={{__html: node.html}}
				 />
				 {NextArticle}
				 {PrevArticle}
			 </article>
		 </Layout>
	)
}

export default Template