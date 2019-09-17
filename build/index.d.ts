import * as React from "react";
import Cookies from "js-cookie";

export interface CookieConsentProps {
  children?: React.ReactNode;
  onAccept?: Function;
  buttonText?: Function | React.ReactNode;
  cookieClass?: string;
  messageClass?: string;
  buttonClass?: string;
  debug?: boolean;
  expires?: number;
  ButtonComponent?: Function | React.ReactElement;
}

export default class CookieConsent extends React.Component<CookieConsentProps, {}> {}

export { Cookies };
