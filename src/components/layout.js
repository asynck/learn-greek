import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation/Navigation';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../scss/custom.scss';
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
          <footer className="py-2 fixed-bottom bg-primary">
            <div className="container">
              <p className="m-0 text-center text-white">
                Copyright &copy; Laura Meikle © 2019, Built with{' '}
                <a className="text-white" href="https://www.gatsbyjs.org">
                  Gatsby
                </a>
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
