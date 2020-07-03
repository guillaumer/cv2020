import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image";

import Nav from "react-bootstrap/Nav";
import {AnchorLink} from "gatsby-plugin-anchor-links";

import Scrollspy from 'react-scrollspy'

import Sections from "../sections";

const Sidebar = (props) => {
	const data = useStaticQuery(graphql`
        query PortraitQuery {
            file(relativePath: { eq: "portrait.jpg" }) {
                childImageSharp {
                    fixed(width: 150, height: 150, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
	`)
	
	const active = props.location.pathname.includes('/blog') ? '/blog' : '/';
	
	const scrollSpyItems = Sections.map(section => section.classe);
	
	const NavLinks = Sections.map((section) => {
		 return <AnchorLink key={section.classe} to={section.href}>{section.title}</AnchorLink>
	});
	
	const NavMenu = () => {
		return (
			 <Nav as={Scrollspy} className="flex-column" defaultActiveKey={active} items={scrollSpyItems}
				  currentClassName="active">
				 {NavLinks}
				 <Link activeClassName="active" to="/blog">Blog</Link>
			 </Nav>
		)
	}
	
	return (
		 <section className="position-fixed sidebar text-center">
			 <header>
				 <Link to="/">
				 	<Img fixed={data.file.childImageSharp.fixed} className="rounded-circle portrait"/>
				 </Link>
				 <h1>
					 <Link to="/">Guillaume Raoult</Link>
				 </h1>
				 <div className="title">Développeur web</div>
			 </header>
			 <NavMenu/>
		 </section>
	)
}

export default Sidebar
