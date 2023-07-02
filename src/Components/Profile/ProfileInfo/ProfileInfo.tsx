import React from 'react'

import { Preloader } from '../../Preloader/Preloader'

import c from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

export const ProfileInfo = (props: any) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/*<div>*/}
      {/*  <img src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg" />*/}
      {/*</div>*/}
      <div className={c.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={'Hello'} />
      </div>
    </div>
  )
}
