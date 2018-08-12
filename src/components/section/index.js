import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Section = ({ background, backgroundClassName, children, className, title }) => (
  <section className={classNames('section-component', className)}>
    {background && (
      <div
        className={classNames('section-background', backgroundClassName)}
        style={{ background: `url('${background}')` }} />
    )}
    <h1>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  background: PropTypes.any,
  backgroundClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

export default Section;
