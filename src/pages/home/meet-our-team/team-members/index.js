import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from './team-member';
import './styles.scss';

const TeamMembers = ({ members, onChangeActiveTeamMember }) => (
  <div className="team-members">
    {members.map((member, index) => (
      <TeamMember
        {...member}
        key={index}
        onSelect={() => onChangeActiveTeamMember(index)} />
    ))}
  </div>
);

TeamMembers.propTypes = {
  members: PropTypes.array,
  onChangeActiveTeamMember: PropTypes.func.isRequired
};

export default TeamMembers;
