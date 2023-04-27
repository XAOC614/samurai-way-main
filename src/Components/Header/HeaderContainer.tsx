import React from 'react'

import axios from 'axios'
import { connect } from 'react-redux'

import { setUserData } from '../../Redux/AuthReducer'
import { AppStateType } from '../../Redux/ReduxStore'

import { Header } from './Header'

type MapStateToPropsType = {
  isAuth: boolean
  login: string
}
type MapDispatchToPropsType = {
  setUserData: (id: number, email: string, login: string) => void
}
export type PropsHeaderType = MapStateToPropsType & MapDispatchToPropsType
class HeaderContainer extends React.Component<PropsHeaderType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data

          this.props.setUserData(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.data.login,
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer)
