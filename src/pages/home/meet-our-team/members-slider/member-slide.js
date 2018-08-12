import React from 'react';
import PropTypes from 'prop-types';

const MemberSlide = ({ member }) => (
  <div
    className="member-slide"
    style={{
      backgroundImage: `url('${member.slideBackground}')`
    }}>
    <div className="member-details">
      <div className="title">{member.title}</div>
      <div className="name">{member.name}</div>
    </div>
  </div>
);

MemberSlide.propTypes = {
  member: PropTypes.shape({
    slideBackground: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string.isRequired
  })
};

export default MemberSlide;

