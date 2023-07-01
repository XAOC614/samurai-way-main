import React, { ComponentType } from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { AppStateType } from '../Redux/ReduxStore'

type mapStateToPropsType = {
  auth: boolean
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    auth: state.auth.isAuth,
  }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateToPropsType) => {
    let { auth, ...restProps } = props

    if (!auth) return <Redirect to="/login" />

    return <Component {...(restProps as T)} />
  }
  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedRedirectComponent
}
