import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component
  @propTypes =
    task: PropTypes.string

  render: ->
    `<div>
      <div>Task: {this.props.task}</div>
    </div>`

export default Todo