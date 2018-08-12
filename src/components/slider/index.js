import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

class Slider extends Component {
  static propTypes = {
    activeSlideIndex: PropTypes.any,
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.slidesRef = React.createRef();
    this.leftButtonRef = React.createRef();
    this.rightButtonRef = React.createRef();
    this.windowResizeEvent = null;
    this.state = {
      width: 0,
      height: 0,
      activeSlideIndex: this.props.initialSlideIndex || 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.slides !== this.props.slides;
  }

  componentDidMount() {
    this.updateViewWithoutTransition();
    window.addEventListener('resize', this.updateViewWithoutTransition);
  }

  componentDidUpdate() {
    this.updateViewWithoutTransition();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewWithoutTransition);
  }

  updateViewWithoutTransition = () => {
    this.slidesRef.current.classList.add('no-transition');
    this.updateView();
    setTimeout(() => this.slidesRef.current.classList.remove('no-transition'), 0);
  };

  getSlideWidth = () => this.sliderRef.current.getBoundingClientRect().width;

  onNextSlide = () => {
    const { children } = this.props;
    const maxIndex = Children.count(children) - 1;
    const activeSlideIndex = Math.min(this.state.activeSlideIndex + 1, maxIndex);
    this.setState({ activeSlideIndex }, this.updateView);
  };

  onPreviousSlide = () => {
    const activeSlideIndex = Math.max(this.state.activeSlideIndex - 1, 0);
    this.setState({ activeSlideIndex }, this.updateView);
  };

  updateView = () => {
    const { activeSlideIndex } = this.state;
    const slideWidth = this.getSlideWidth();
    const slideElements = Array.from(this.slidesRef.current.children);
    const offsetX = -activeSlideIndex * slideWidth;
    slideElements.forEach((slide) => {
      slide.style.width = `${slideWidth}px`;
    });
    this.slidesRef.current.style.transform = `translateX(${offsetX}px)`;
    this.updateNavigationButtons();
  };

  updateNavigationButtons = () => {
    const { activeSlideIndex } = this.state;
    const { children } = this.props;
    const minIndex = 0;
    const maxIndex = Children.count(children) - 1;

    this.leftButtonRef.current.classList.remove('hidden');
    this.rightButtonRef.current.classList.remove('hidden');

    if (activeSlideIndex === minIndex) {
      this.leftButtonRef.current.classList.add('hidden');
    }

    if (activeSlideIndex === maxIndex) {
      this.rightButtonRef.current.classList.add('hidden');
    }
  };

  render() {
    const { className, children } = this.props;

    return (
      <div ref={this.sliderRef} className={classNames('slider-component', className)}>
        <div ref={this.leftButtonRef} className="arrow-button left" onClick={this.onPreviousSlide}>
          <FontAwesomeIcon icon="angle-left" />
        </div>

        <div ref={this.slidesRef} className="slides no-transition">
          {Children.map(children, (child, index) => (
            <div key={index} className="slide">
              {child}
            </div>
          ))}
        </div>

        <div ref={this.rightButtonRef} className="arrow-button right" onClick={this.onNextSlide}>
          <FontAwesomeIcon icon="angle-right" />
        </div>
      </div>
    );
  }
}

export default Slider;
