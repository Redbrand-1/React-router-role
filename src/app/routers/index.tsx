import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router'
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import { RouterSetting } from '../../setting/routers'
import { ADD_ROUTER_NAVBAR } from '../../constant/type'

interface stateRole {
  role: [
    {
      role: string, redirect: string
    }
  ]
}
interface stateUser {
  user: {
    activeRole: string
  } 
}

interface ActiveRouter {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> ,
  to: string ,
  label: string ,
} 

export const Routers = () => {

  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  const role = useSelector( (state: stateRole ) => state.role) // все роли какие есть
  const user = useSelector( (state: stateUser ) => state.user) // данные пользователя
  // eslint-disable-next-line
  const Role = role.filter((val: any) => { if(val.role === user.activeRole) { return val }}) // активная роль
  ///////////////////////////


  const active = Role[0]
  const activeRole = user.activeRole

  useEffect(() => { // блокировка роутов
    RouterSetting.forEach(val => {
      if(pathname === val.to){
        if(activeRole !== val.role) {
          history.push(active.redirect)
        }
      }
    })
    // eslint-disable-next-line
  },[activeRole, pathname])

  useEffect(() => { // активные роуты для меню
    let route:  ActiveRouter[] = []
    RouterSetting.forEach(val => {
      if(activeRole === val.role) {
        route.push({ icon: val.icon, to: val.to, label: val.label })
      }
    })

    dispatch({
      type: ADD_ROUTER_NAVBAR,
      routers: route
    })
    // eslint-disable-next-line
  },[activeRole])


  return (
    <Switch>
        {
          RouterSetting.map((val, index) => {
            return (
              <Route key={index} path={val.to}>
                <val.component/>
              </Route>
            )
          })
        }
          <Redirect to={active.redirect}/>
    </Switch>
  );
}
