import { log } from 'util'

import React from 'react'

class ProfileStatus extends React.Component<any> {
  state = {
    editMode: false,
    status: this.props.status,
  }
  activateEditMode = () => {
    this.setState({ editMode: true })
  }
  deActivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateUserStatus(this.state.status)
  }
  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.target.value })
  }

  render() {
    console.log(this.props.status, 'да что угодно')

    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    )
  }
}
export default ProfileStatus
