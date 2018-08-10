import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Section = ({ background, children, className, title }) => (
  <section
    style={{ background: `url('${background}')` }}
    className={classNames('section-component', className)}>
    <h1>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

export default Section;
