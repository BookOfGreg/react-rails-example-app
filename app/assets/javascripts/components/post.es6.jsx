class Post extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>

      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.node,
  body: PropTypes.node
};
