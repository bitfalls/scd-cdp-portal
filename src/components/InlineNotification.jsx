// Libraries
import React from "react";

const icon = (
  <svg className="notification-icon" width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.7474933 115.215803c-.0234376-.117187.0117186-.222655.1054685-.316405.09375-.09375.1992185-.140625.3164055-.140625h1.898433c.117187 0 .2226555.046875.3164055.140625.0937499.09375.1289061.199218.1054685.316405l-.210937 3.937491c-.0234376.09375-.0761719.18164-.1582028.263671-.0820308.082031-.1699213.123047-.2636712.123047h-1.476559c-.0937499 0-.1816404-.041016-.2636712-.123047-.0820309-.082031-.1347652-.169921-.1582028-.263671zm2.8476495 6.292954c0 .398436-.1464842.744139-.4394521 1.037107s-.6386705.439452-1.0371069.439452-.744139-.146484-1.0371069-.439452-.4394521-.638671-.4394521-1.037107.1464842-.744139.4394521-1.037107.6386705-.439452 1.0371069-.439452.744139.146484 1.0371069.439452.4394521.638671.4394521 1.037107zm0-12.65622 8.4374799 14.624965c.1874993.375.2460931.755858.1757808 1.142576s-.2578117.714842-.5624987.984372c-.3046869.269531-.6679671.404296-1.0898411.404296h-16.8749598c-.421874 0-.7851542-.134765-1.0898411-.404296-.304687-.26953-.4921864-.597654-.5624987-.984372s-.0117185-.767576.1757808-1.142576l8.4374799-14.624965c.210937-.374999.5097644-.626951.8964823-.755857.3867178-.128907.7734356-.128907 1.1601534 0 .3867179.128906.6855453.380858.8964823.755857zm-9.7382581 15.152308c-.0468747.070312-.0468747.140624 0 .210937.0468748.070312.1054685.105468.1757809.105468h16.1718364c.0703124 0 .1289061-.035156.1757809-.105468.0468747-.070313.0468747-.140625 0-.210937l-8.0859183-13.992154c-.0468747-.070313-.1054685-.105469-.1757808-.105469s-.1289061.035156-.1757808.105469z" fill="#fff" fillRule="evenodd" transform="translate(-15 -108)"/>
  </svg>
);

class InlineNotification extends React.Component {
  render() {
    return (
      <div className={ "inline-notification " + (this.props.type === "error" ? "is-error" : "") + (this.props.type === "warning" ? "is-warning" : "") + (this.props.class ? " " + this.props.class : "") }>
        {
          this.props.onCloseButtonClick &&
          <svg onClick={ e => { e.preventDefault(); this.props.onCloseButtonClick() } } className="close-button" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd"><path d="m-935-11h970v123h-970z"/><g><g strokeLinecap="round" strokeLinejoin="round" transform="translate(7 7)"><path d="m6 0-6 6"/><path d="m0 0 6 6"/></g><circle cx="10" cy="10" r="9"/></g></g>
          </svg>
        }
        { this.props.caption && icon }
        {
          this.props.caption &&
          <div className="caption">
            { this.props.caption }
          </div>
        }
        { !this.props.caption && icon }
        <div className={ "message" + (this.props.onButtonClick ? " has-button" : "") + (!this.props.caption ? " no-caption" : "") }>
        { this.props.message }
        {
          this.props.onButtonClick && <button className="text-btn disable-on-dialog" onClick={ this.props.onButtonClick }>{ this.props.buttonText || "OK" }</button>
        }
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
}

export default InlineNotification;
