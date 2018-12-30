import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation/Navigation';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../styles/heroic-features.css';
import '../styles/globals.css';

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
        <div>
          {children}
          <footer className="py-2">
            <div className="container">
              <p className="m-0 text-center text-white">
                Copyright &copy; Laura Meikle © 2018, Built with{' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </p>
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
