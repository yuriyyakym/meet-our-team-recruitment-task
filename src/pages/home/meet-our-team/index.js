import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/section';
import Slider from 'components/slider';
import TeamMember from './team-member';
import backgroundImage from './bg.png';
import './styles.scss';

class MeetOurTeam extends PureComponent {
  static propTypes = {
    members: PropTypes.array
  };

  render() {
    const { members } = this.props;
    return (
      <Section
        className="meet-our-team"
        title="Meet our team"
        background={backgroundImage}>
        <div className="team-members">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <Slider>
          {members.map((member) => (
            <div>{member.name}</div>
          ))}
        </Slider>
      </Section>
    );
  }
}

export default MeetOurTeam;
