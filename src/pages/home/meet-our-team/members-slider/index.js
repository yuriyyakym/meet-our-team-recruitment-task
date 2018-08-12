import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'components/slider';
import MemberSlide from './member-slide';
import './styles.scss';

const MembersSlider = ({ members, activeSlideIndex }) => (
  <Slider className="members-slider" initialSlideIndex={activeSlideIndex}>
    {members.map((member, index) => (
      <MemberSlide member={member} key={index} />
    ))}
  </Slider>
);

MembersSlider.propTypes = {
  activeSlideIndex: PropTypes.number,
  members: PropTypes.array
};

export default MembersSlider;
