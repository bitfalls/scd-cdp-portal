import React from 'react';

const TooltipHint = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="tooltip-hint" data-event='click' data-event-off='dblclick' data-tip={ props.tip }>
        <path fillRule="nonzero" d="M5.4 8.997h1.2V7.872H5.4v1.125zM6 0C2.688 0 0 2.519 0 5.623s2.688 5.623 6 5.623 6-2.52 6-5.623C12 2.519 9.312 0 6 0zm0 10.121c-2.646 0-4.8-2.018-4.8-4.498 0-2.48 2.154-4.498 4.8-4.498s4.8 2.018 4.8 4.498c0 2.48-2.154 4.498-4.8 4.498zM6 2.25c-1.326 0-2.4 1.007-2.4 2.25h1.2c0-.62.54-1.125 1.2-1.125.66 0 1.2.506 1.2 1.124 0 1.125-1.8.984-1.8 2.812h1.2c0-1.265 1.8-1.406 1.8-2.812C8.4 3.256 7.326 2.25 6 2.25z"/>
    </svg>
  )
}

export default TooltipHint;