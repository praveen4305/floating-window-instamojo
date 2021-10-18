import React from "react";

class App extends React.Component {
  openWindow = () => {
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : window.screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : window.screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - 400) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 600) / 2 / systemZoom + dualScreenTop;
    const url =
      "https://test.instamojo.com/@praveenb";
      // l77791e135d274da99a63a5cf7597b30c
    window.open(
      url,
      "_blank",
      `
            scrollbars=yes,
            width=${400 / systemZoom}, 
            height=${600 / systemZoom}, 
            top=${top}, 
            left=${left}
            `
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.openWindow}>click</button>
      </div>
    );
  }
}

export default App;
