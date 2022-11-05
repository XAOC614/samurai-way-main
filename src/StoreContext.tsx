import React from 'react'

import { AppStoreType } from './Redux/ReduxStore'
export const StoreContext = React.createContext({} as AppStoreType)

export type ProviderType = {
  store: AppStoreType
  children: any
}

export const Provider = (props: ProviderType) => {
  return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}
