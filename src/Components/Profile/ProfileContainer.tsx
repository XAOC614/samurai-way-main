import React from 'react'

import axios from 'axios'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { ProfileType, setUserProfile } from '../../Redux/ProfileReducer'
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
  setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = '2'
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.setUserProfile(response.data)
    })
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

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)
