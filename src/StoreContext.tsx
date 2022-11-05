import React from 'react'

import { AppStateType } from './Redux/ReduxStore'
const StoreContext = React.createContext({} as AppStateType)

export type ProviderType = {
  store: AppStateType
  children: any
}

const Provider = (props: ProviderType) => {
  return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}
