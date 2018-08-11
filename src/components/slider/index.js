import React, { Children, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

class Slider extends PureComponent {
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
      activeSlideIndex: this.props.activeSlideIndex || 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.slides !== this.props.slides;
  }

  componentDidMount() {
    this.recalculateSlideDimensions();
    window.addEventListener('resize', this.recalculateSlideDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.recalculateSlideDimensions);
  }

  recalculateSlideDimensions = () => {
    const { width, height } = this.sliderRef.current.getBoundingClientRect();
    this.setState({ width, height });
    const slidesElements = Array.from(this.slidesRef.current.children);
    slidesElements.forEach((child) => {
      child.style.width = `${width}px`;
    });
    this.fitSlides();
  };

  onNextSlide = () => {
    const { children } = this.props;
    const activeSlideIndex = (this.state.activeSlideIndex + 1) % Children.count(children);
    this.setState({ activeSlideIndex }, this.fitSlides);
  };

  onPreviousSlide = () => {
    const activeSlideIndex = Math.max(this.state.activeSlideIndex - 1, 0);
    this.setState({ activeSlideIndex }, this.fitSlides);
  };

  fitSlides = () => {
    const { activeSlideIndex, width, children } = this.state;
    const childrenCount = Children.count(children);
    const offsetX = (childrenCount - activeSlideIndex) * width;
    this.slidesRef.current.style.transform = `translateX(${offsetX}px)`;
  };

  render() {
    const { className, children } = this.props;

    return (
      <div ref={this.sliderRef} className={classNames('slider-component', className)}>
        <div className="arrow-button left" onClick={this.onPreviousSlide}>
          123
        </div>

        <div
          ref={this.slidesRef}
          className="slides">
          {Children.map(children, (child, index) => (
            <div key={index} className="slide">
              {child}
            </div>
          ))}
        </div>

        <div className="arrow-button right" onClick={this.onNextSlide}>
          456
        </div>
      </div>
    );
  }
}

export default Slider;
