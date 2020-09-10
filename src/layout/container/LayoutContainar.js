import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class LayoutContainar extends Component {
  state = {
    layBar: { gridColumn: "0", width: "0%" },
    layHeader: { gridColumn: "1 / 16" },
    layContent: { gridColumn: "1 / 16" },
  };

  onClick = () => {
    const { layBar } = this.state;
    if (layBar.width) {
      this.setState({
        layBar: {},
        layHeader: {},
        layContent: {},
      });
    } else {
      this.setState({
        layBar: { gridColumn: "0", width: "0%" },
        layHeader: { gridColumn: "1 / 16" },
        layContent: { gridColumn: "1 / 16" },
      });
    }
  };

  render() {
    const { cayoutContent } = this.props;
    const { layBar, layHeader, layContent } = this.state;
    return (
      <Fragment>
        <div className="lay-bar" style={layBar}>
          {!layBar.width ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test1">test1</Link>
              </li>
            </ul>
          ) : (
            []
          )}
        </div>

        <div className="lay-header" style={layHeader}>
          <div className="lay-bar-but" onClick={this.onClick}>
            but
          </div>
          <div> header </div>
        </div>

        <div className="lay-content" style={layContent}>
          {cayoutContent}
          {/* <div className="lay-content-test">text</div> */}
        </div>
      </Fragment>
    );
  }
}
export default LayoutContainar;
