import React from 'react'
import { Route } from 'react-router'

export const Privateroute=({children,exact=false,push=false,path})=>{
    return <Route exact={exact} path={path}>
       {children}
           </Route>
}