import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/Home/Card';
import '../components/Home/home.css';

const IndexPage = ({ data }) => {
  /**const urlParams = new URLSearchParams(
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
  }*/

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="container">
        <div className="categories">
          <div className="row text-center">
            {data.allWordsJson.edges.map(x => {
              return <Card category={x.node.Category} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allWordsJson {
      edges {
        node {
          Category {
            en
            el
            description
          }
        }
      }
    }
  }
`;
