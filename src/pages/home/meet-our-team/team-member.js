import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/avatar';

const TeamMember = ({ name, title, email, location, photo, onSelect }) => (
  <div className="team-member">
    <div className="avatar-container">
      <Avatar className="avatar" alt={name} url={photo} onClick={onSelect} />

      {email && (
        <a className="mail-link" href={`mailto:${email}`}>
          <FontAwesomeIcon icon="envelope" />
        </a>
      )}
    </div>

    <h5 className="name">{name}</h5>
    <span className="title">{title}</span>
    <span className="location">{location}</span>
  </div>
);

TeamMember.propTypes = {
  email: PropTypes.string,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

export default TeamMember;
