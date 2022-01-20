
import type { NextPage } from 'next'
import React from 'react'
import gbs from '../../styles/Teste.module.css'

const Layout = () => {
    
    return (
        <div className={gbs.grid}>
            <div className={gbs.box1}>One</div>
            <div className={gbs.box2}>dois</div>
            <div className={gbs.box3}>tre</div>
        </div>
    )

}


export default Layout