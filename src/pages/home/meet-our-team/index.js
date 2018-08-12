import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from 'components/section';
import TeamMembers from './team-members';
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
        backgroundClassName="team-members-background"
        background={backgroundImage}>
        <TeamMembers members={members} onChangeActiveTeamMember={this.onChangeActiveTeamMember} />

        <ReactCSSTransitionGroup
          transitionName="slider-animation"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
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
        </ReactCSSTransitionGroup>
      </Section>
    );
  }
}

export default MeetOurTeam;
