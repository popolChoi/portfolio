
import React, { Component } from 'react';


class LayoutContainar extends Component {

  render() {
    return (<div id="jb-container">
    <div id="jb-header">
      <h1>Responsive Layout</h1>
    </div>
    <div id="jb-content">
      <h2>Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mollis nulla. Phasellus lacinia tempus mauris eu laoreet. Proin gravida velit dictum dui consequat malesuada. Aenean et nibh eu purus scelerisque aliquet nec non justo. Aliquam vitae aliquet ipsum. Etiam condimentum varius purus ut ultricies. Mauris id odio pretium, sollicitudin sapien eget, adipiscing risus.</p>
    </div>
    <div id="jb-sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
      </ul>
    </div>
    <div id="jb-footer">
      <p>Copyright</p>
    </div>
  </div>);
  }
}
export default LayoutContainar;
