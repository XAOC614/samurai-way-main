import React from 'react'

import { connect } from 'react-redux'

import { getUserData } from '../../Redux/AuthReducer'
import { AppStateType } from '../../Redux/ReduxStore'

import { Header } from './Header'

type MapStateToPropsType = {
  isAuth: boolean
  login: string
}
type MapDispatchToPropsType = {
  getUserData: () => void
}
export type PropsHeaderType = MapStateToPropsType & MapDispatchToPropsType
class HeaderContainer extends React.Component<PropsHeaderType> {
  componentDidMount() {
    this.props.getUserData()
  }

  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.data.login,
})

export default connect(mapStateToProps, { getUserData })(HeaderContainer)
