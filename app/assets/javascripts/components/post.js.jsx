var Post = createReactClass({
  propTypes: {
    body: PropTypes.node,
    title: PropTypes.node
  },

  render: function() {
    return (
      <div>
        <div>Body: {this.props.body}</div>
        <div>Title: {this.props.title}</div>
      </div>
    );
  }
});

