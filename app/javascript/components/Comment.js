import React from "react"
import PropTypes from "prop-types"
class Comment extends React.PureComponent {
  render () {
    return (
      <div>
        <div>Author: {this.props.author}</div>
        <div>Text: {this.props.text}</div>
      </div>
    );
  }
}

Comment.propTypes = {
  author: PropTypes.node,
  text: PropTypes.node
};
export default Comment
