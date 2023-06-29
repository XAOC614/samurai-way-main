import React from 'react'

import { connect } from 'react-redux'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getUserProfile, ProfileType } from '../../Redux/ProfileReducer'
import { AppStateType } from '../../Redux/ReduxStore'

import { Profile } from './Profile'

type PathParamsType = {
  userId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = MapStatePropsType & mapDispatchPropsType
type MapStatePropsType = {
  profile: ProfileType
  auth: boolean
}
type mapDispatchPropsType = {
  getUserProfile: (userId: string) => void
}

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = '2'
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
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
  // auth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
