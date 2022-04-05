var React = require("react")
var PropTypes = require("prop-types")
class User extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.String,
  age: PropTypes.Integer
};
module.exports = User
