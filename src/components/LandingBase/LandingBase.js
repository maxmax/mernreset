import React, { PropTypes }  from 'react';

import './landingbase.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {
    logo: '/lang-logo.png',
    title: 'Create Title!',
    description: 'Create Description'
  }
};

//Shema
//logo: '/lang-logo.png',
//title: 'Hello and a very warm welcome!',
//description: 'We are a customer-service oriented team of web developers committed to the highest quality of our work and we stand behind it.',
//video: '/media/videobg.mp4',
//img: '/media/billionphotos.jpg',
//down: '#AboutContainer'

class LandingBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  _renderLogo () {
    if (!this.props.data.logo) { return null; }
    return (
      <a href="/" className="lang-logo">
        <img src={this.props.data.logo} />
      </a>
    );
  }

  _renderTitle () {
    if (!this.props.data.title) { return null; }
    return (
      <h1>{this.props.data.title}</h1>
    );
  }

  _renderDesc () {
    if (!this.props.data.description) { return null; }
    return (
      <p>{this.props.data.description}</p>
    );
  }

  _renderVideoBg () {
    if (!this.props.data.video) { return null; }
    return (
      <div className="container-video">
        <video className="video" autoPlay="autoplay" muted loop>
          <source src={this.props.data.video} type="video/mp4" />
        </video>
      </div>
    );
  }

  _renderImgBg () {
    if (!this.props.data.img) { return null; }
    var style = {
      backgroundImage: 'url(' + this.props.data.img + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    return (
      <div className="container-img" style={style}></div>
    );
  }

  _renderDown () {
    if (!this.props.data.down) { return null; }
    return (
      <a href={this.props.data.down} className="down"></a>
    );
  }

  render() {

    return (
      <div className='landing-base text-center'>
        {this._renderVideoBg()}
        {this._renderImgBg()}
        <div className="container">
          {this._renderLogo()}
          {this._renderTitle()}
          {this._renderDesc()}
        </div>
        {this._renderDown()}
      </div>
    );
  }
}

LandingBase.propTypes = propTypes;
LandingBase.defaultProps = defaultProps;

export default LandingBase;