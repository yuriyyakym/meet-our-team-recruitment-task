import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Avatar = ({ alt, className, url, onClick }) => (
  <div className={classNames('avatar-component', className)}>
    <img
      alt={alt}
      src={url}
      onClick={onClick} />
  </div>
);

Avatar.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func
};

export default Avatar;
