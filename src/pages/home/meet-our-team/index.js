import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from 'components/section';
import TeamMembers from './team-members';
import MembersSlider from './members-slider';
import backgroundImageUrl from './bg.png';
import './styles.scss';

const SLIDER_APPEARANCE_DURATION = 400;

class MeetOurTeam extends Component {
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
        background={backgroundImageUrl}>
        <TeamMembers members={members} onMemberClick={this.onChangeActiveTeamMember} />

        <ReactCSSTransitionGroup
          transitionName="slider-animation"
          transitionEnterTimeout={SLIDER_APPEARANCE_DURATION}
          transitionLeaveTimeout={SLIDER_APPEARANCE_DURATION}>
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
