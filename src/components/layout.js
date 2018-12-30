import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation/Navigation'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

import Header from './header';
//import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <div

        >
          {children}
          <footer class="py-5 bg-dark">
            <div class="container">
              © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
              <p class="m-0 text-center text-white">Copyright &copy; Laura Meikle 2018</p>
            </div>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
