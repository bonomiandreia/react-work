import React from 'react';
import PropTypes from 'prop-types';
import styles from './Posts.module.scss';

const Posts = () => (
  <div className={styles.Posts} data-testid="Posts">
    Posts Component
  </div>
);

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
