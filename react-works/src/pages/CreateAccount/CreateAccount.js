import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateAccount.module.scss';

const CreateAccount = () => (
  <div className={styles.CreateAccount} data-testid="CreateAccount">
    CreateAccount Component
  </div>
);

CreateAccount.propTypes = {};

CreateAccount.defaultProps = {};

export default CreateAccount;
