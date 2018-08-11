import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'components/slider';

const MembersSlider = ({ members, activeSlideIndex }) => (
  <Slider initialSlideIndex={activeSlideIndex}>
    {members.map((member, index) => (
      <div
        className="member-slide"
        key={index}
        style={{
          backgroundImage: `url('${member.slideBackground}')`
        }}>
        <div className="member-details">
          <h4 className="title">{member.title}</h4>
          <h1 className="name">{member.name}</h1>
        </div>
      </div>
    ))}
  </Slider>
);

MembersSlider.propTypes = {
  activeSlideIndex: PropTypes.number,
  members: PropTypes.array
};

export default MembersSlider;
