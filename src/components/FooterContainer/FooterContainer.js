import React, { PropTypes }  from 'react';

import './FooterContainer.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

class FooterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      class: this.props.data.class || 'text-center'
    };
  }

  _renderWrapper () {
    if (!this.props.data.text) { return null; }
    return (
      <div className={'footer ' + this.state.class}>
        <p>{this.props.data.text}</p>
      </div>
    );
  }

  render() {

    return this._renderWrapper();
  }
}

FooterContainer.propTypes = propTypes;
FooterContainer.defaultProps = defaultProps;

export default FooterContainer;
