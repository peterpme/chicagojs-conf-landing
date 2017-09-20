import React, { PureComponent} from 'react'
export default class VolunteerPage extends PureComponent {
  render () {
    return (
      <div>
        <h1>Volunteer</h1>
        <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSe8o5nN2iVb1WKWJcSX3BqoJLmGVTQygz4xwXQF2ednoqUzlg/viewform?embedded=true'
        width={600}
        height={1700}
        frameBorder={0}
      >
          Loading...
        </iframe>
      </div>
    )
  }
}
