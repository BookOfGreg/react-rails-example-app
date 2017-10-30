import React from "react"
import PropTypes from "prop-types"
var Post = createReactClass({
  propTypes: {
    title: PropTypes.string,
    body: PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
});
export default Post
