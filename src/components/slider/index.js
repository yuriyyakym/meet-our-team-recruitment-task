import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

class Slider extends Component {
  static propTypes = {
    initialSlideIndex: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.state = {
      width: 0,
      height: 0,
      activeSlideIndex: this.props.initialSlideIndex || 0
    };
  }

  componentDidMount() {
    this.updateSlideWidth();
    window.addEventListener('resize', this.updateSlideWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSlideWidth);
  }

  updateSlideWidth = () => {
    const slideWidth = this.sliderRef.current.getBoundingClientRect().width;
    this.setState({ slideWidth });
  };

  onNextSlide = () => {
    const { children } = this.props;
    const maxIndex = Children.count(children) - 1;
    const activeSlideIndex = Math.min(this.state.activeSlideIndex + 1, maxIndex);
    this.setState({ activeSlideIndex });
  };

  onPreviousSlide = () => {
    const activeSlideIndex = Math.max(this.state.activeSlideIndex - 1, 0);
    this.setState({ activeSlideIndex });
  };

  render() {
    const { slideWidth, activeSlideIndex } = this.state;
    const { className, children } = this.props;
    const offsetX = -activeSlideIndex * slideWidth;

    return (
      <div ref={this.sliderRef} className={classNames('slider-component', className)}>
        <div
          className={classNames('arrow-button', 'left', {
            hidden: activeSlideIndex === 0
          })}
          onClick={this.onPreviousSlide}>
          <FontAwesomeIcon icon="angle-left" />
        </div>

        <div className="slides" style={{ transform: `translateX(${offsetX}px)` }}>
          {Children.map(children, (child, index) => (
            <div key={index} className="slide" style={{ width: slideWidth }}>
              {child}
            </div>
          ))}
        </div>

        <div
          className={classNames('arrow-button', 'right', {
            hidden: activeSlideIndex === Children.count(children) - 1
          })}
          onClick={this.onNextSlide}>
          <FontAwesomeIcon icon="angle-right" />
        </div>
      </div>
    );
  }
}

export default Slider;
