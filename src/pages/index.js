import React from "react"

import {Helmet} from "react-helmet";

import Layout from "../components/site/layout";
import Section from "../components/site/section";
import Sections from "../components/sections";
import useSiteMetadata from "../hooks/use-site-metadata";

const Index = ({location}) => {
	const {title} = useSiteMetadata();
	
	const sections = Sections.map(section => {
		return (
			 
			 <Section key={section.classe} title={section.title} classe={section.classe}>
				 {section.children}
			 </Section>
		)
	})
	
	return (
		 <div>
			 <Helmet>
				 <title>{title}</title>
			 </Helmet>
			 <Layout location={location}>
				 {sections}
			 </Layout>
		 </div>
	)
}

export default Index

