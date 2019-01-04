import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/Home/Home';
import Artist from '../components/Artist';

const IndexPage = ({ data }) => {
  const urlParams = new URLSearchParams(
    typeof window !== undefined ? window.location.search : ''
  );
  const myParam = urlParams.get('artist');
  let band;
  if (myParam) {
    for (let i = 0; i < data.allArtistJson.edges.length; i++) {
      if (
        data.allArtistJson.edges[i].node.Name.toLowerCase() ===
        myParam.toLowerCase()
      ) {
        band = data.allArtistJson.edges[i].node;
      }
    }
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Home />
      <Artist artist={band} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allArtistJson {
      edges {
        node {
          Name
          Origin
        }
      }
    }
  }
`;
