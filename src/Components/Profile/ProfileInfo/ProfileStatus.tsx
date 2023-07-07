import { log } from 'util'

import React from 'react'
type stateType = {
  editMode: boolean
  status: string
}
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
  componentDidUpdate(prevProps: stateType, prevState: stateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }
  render() {
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
