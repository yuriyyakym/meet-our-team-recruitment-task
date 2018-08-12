import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './team-member';
import './styles.scss';

const TeamMembers = ({ members, onMemberClick }) => (
  <div className="team-members">
    {members.map((member, index) => (
      <TeamMember
        {...member}
        key={index}
        onClick={() => onMemberClick(index)} />
    ))}
  </div>
);

TeamMembers.propTypes = {
  members: PropTypes.array.isRequired,
  onMemberClick: PropTypes.func.isRequired
};

export default TeamMembers;
