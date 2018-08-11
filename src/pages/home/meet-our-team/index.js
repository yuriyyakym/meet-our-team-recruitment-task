import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/section';
import TeamMember from './team-member';
import MembersSlider from './members-slider';
import backgroundImage from './bg.png';
import './styles.scss';

class MeetOurTeam extends PureComponent {
  static propTypes = {
    members: PropTypes.array
  };

  state = {
    activeTeamMemberIndex: null
  };

  onChangeActiveTeamMember = (index) => {
    this.setState({
      activeTeamMemberIndex: index
    })
  }

  render() {
    const { activeTeamMemberIndex } = this.state;
    const { members } = this.props;
    return (
      <Section
        className="meet-our-team"
        title="Meet our team"
        background={backgroundImage}>
        <div className="team-members">
          {members.map((member, index) => (
            <TeamMember
              {...member}
              key={index}
              onSelect={() => this.onChangeActiveTeamMember(index)} />
          ))}
        </div>

        {activeTeamMemberIndex && (
          <MembersSlider
            members={members}
            activeSlideIndex={activeTeamMemberIndex} />
        )}
      </Section>
    );
  }
}

export default MeetOurTeam;
