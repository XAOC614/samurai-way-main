import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

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
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
