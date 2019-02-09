import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/Home/Home';

const IndexPage = ({ data }) => {
  const urlParams = new URLSearchParams(
    typeof window !== undefined ? window.location.search : ''
  );
  const categoryName = urlParams.get('category');

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Home data={data} categoryName={categoryName} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allWordsJson {
      edges {
        node {
          en
          el
          description
          words {
            en
            el
          }
        }
      }
    }
  }
`;
