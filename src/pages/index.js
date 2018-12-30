import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Card from '../components/Home/Card';

import '../components/heroic-features.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <header className="jumbotron my-4">
        <h1 className="display-3">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt
          possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam
          repellat.</p>
        <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
      </header>
      <div className="row text-center">
        <Card></Card>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
