import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  onCloseSlider = () => {
    this.setState({ activeTeamMemberIndex: null });
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

        {activeTeamMemberIndex !== null && (
          <div className="slider-container">
            <MembersSlider
              members={members}
              activeSlideIndex={activeTeamMemberIndex} />
            <FontAwesomeIcon
              className="close-button"
              icon="times"
              onClick={this.onCloseSlider} />
          </div>
        )}
      </Section>
    );
  }
}

export default MeetOurTeam;
