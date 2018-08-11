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
    this.fitSlides();
    window.addEventListener('resize', this.fitSlides);
  }

  componentDidUpdate() {
    this.fitSlides();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitSlides);
  }

  getSlideWidth = () => this.sliderRef.current.getBoundingClientRect().width;

  onNextSlide = () => {
    const { children } = this.props;
    const activeSlideIndex = (this.state.activeSlideIndex + 1) % Children.count(children);
    this.setState({ activeSlideIndex }, this.fitSlides);
  };

  onPreviousSlide = () => {
    const { children } = this.props;
    const activeSlideIndex = this.state.activeSlideIndex - 1 >= 0
      ? this.state.activeSlideIndex - 1
      : Children.count(children) - 1;
    this.setState({ activeSlideIndex }, this.fitSlides);
  };

  fitSlides = () => {
    const { activeSlideIndex } = this.state;
    const slideWidth = this.getSlideWidth();
    const slideElements = Array.from(this.slidesRef.current.children);
    const offsetX = -activeSlideIndex * slideWidth;
    slideElements.forEach((slide) => {
      slide.style.width = `${slideWidth}px`;
    });
    this.slidesRef.current.style.transform = `translateX(${offsetX}px)`;
  };

  render() {
    const { className, children } = this.props;

    return (
      <div ref={this.sliderRef} className={classNames('slider-component', className)}>
        <div className="arrow-button left" onClick={this.onPreviousSlide}>
          <FontAwesomeIcon icon="angle-left" />
        </div>

        <div ref={this.slidesRef} className="slides">
          {Children.map(children, (child, index) => (
            <div key={index} className="slide">
              {child}
            </div>
          ))}
        </div>

        <div className="arrow-button right" onClick={this.onNextSlide}>
          <FontAwesomeIcon icon="angle-right" />
        </div>
      </div>
    );
  }
}

export default Slider;
