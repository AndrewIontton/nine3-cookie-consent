import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

class CookieConsent extends Component {
  constructor(props) {
    super(props);
    this.accept.bind(this);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    const { debug } = this.props;

    // if cookie undefined or debug
    if (Cookies.get('CookieConsent') === undefined || debug) {
      this.setState({ visible: true });
    }
  }

  /**
   * Set a persistent accept cookie
   */
  accept() {
    const {
      expires,
      onAccept,
    } = this.props;

    // fire onAccept
    onAccept();
    Cookies.set('CookieConsent', true, { expires: expires });
    this.setState({ visible: false });
  }

  render() {
    // If the bar shouldn't be visible don't render anything.
    if (!this.state.visible) {
      return null;
    }

    const {
      buttonText,
      cookieClass,
      containerClass,
      messageClass,
      buttonClass,
      ButtonComponent
    } = this.props;

    return (
      <div className={cookieClass}>
        <div className={containerClass}>
          <div className={messageClass}>{this.props.children}</div>
          <ButtonComponent className={buttonClass} key="acceptButton" onClick={() => { this.accept() }}>{buttonText}</ButtonComponent>
        </div>
      </div>
    );
  }
}

CookieConsent.propTypes = {
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onAccept: PropTypes.func,
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  cookieClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  containerClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  messageClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  buttonClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  debug: PropTypes.bool,
  expires: PropTypes.number,
  ButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};

CookieConsent.defaultProps = {
  onAccept: () => {},
  buttonText: 'I understand',
  expires: 150,
  ButtonComponent: ({ children, ...props }) => <button {...props}>{children}</button>
};

export default CookieConsent;
export { Cookies };
