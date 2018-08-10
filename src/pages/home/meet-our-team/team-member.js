import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/avatar';

const TeamMember = ({ name, title, location, photo, onClick }) => (
  <div className="team-member">
    <Avatar className="avatar" alt={name} url={photo} />
    <h5 className="name">{name}</h5>
    <span className="title">{title}</span>
    <span className="location">{location}</span>
  </div>
);

TeamMember.propTypes = {
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default TeamMember;
