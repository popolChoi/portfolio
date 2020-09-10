import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class LayoutContainar extends Component {
  state = {
    layBar: { width: "100px" },
    layContainer: { width: "calc(100% - 100px)" },
  };

  onClick = () => {
    const { layBar } = this.state;
    if (layBar.width === "0%") {
      this.setState({
        layBar: { width: "100px" },
        layContainer: { width: "calc(100% - 100px)" },
      });
    } else {
      this.setState({
        layBar: { width: "0%" },
        layContainer: { width: "100%" },
      });
    }
  };

  render() {
    const { cayoutContent } = this.props;
    const { layContainer, layBar } = this.state;
    return (
      <Fragment>
        <div className="lay-main">
          <div className="lay-bar" style={layBar}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test1">test1</Link>
              </li>
            </ul>
          </div>

          <div className="lay-container" style={layContainer}>
            <div className="lay-header">
              <div className="lay-bar-but" onClick={this.onClick}>
                but
              </div>
              <div> header </div>
            </div>

            <div className="lay-content">
              {cayoutContent}
              {/* <div className="lay-content-test">text</div> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LayoutContainar;
