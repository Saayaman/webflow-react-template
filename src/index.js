import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import Calendar from 'react-calendar'


const CalendarComp = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <CalendarComp />
    )
  }
}


ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('react-target')
);