/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import s from './yachts.module.css'
import YatchApi from './YatchApi'
import YatchMenu from './YatchMenu'

const Yachts = () => {

  const [menu, setMenu] =useState(YatchApi)

  return (
    <main className={`${s.yachts}`}>
        <div className={s.yachtElements}>
            <div className={s.backimg}>

            </div>
            <div>
              <YatchMenu menu = {menu}/>
            </div>
        </div>
    </main>
  )
}

export default Yachts