import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
  getUserProfile,
  getUserStatus,
  ProfileType,
  updateUserStatus,
} from '../../Redux/ProfileReducer'
import { AppStateType } from '../../Redux/ReduxStore'

import { Profile } from './Profile'

type PathParamsType = {
  userId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = MapStatePropsType & mapDispatchPropsType
type MapStatePropsType = {
  profile: ProfileType
  status: string
}
type mapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getUserStatus: (userId: string) => void
  updateUserStatus: (status: string) => void
}

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = '10'
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={updateUserStatus}
        />
      </div>
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  auth: state.auth.isAuth,
})

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
