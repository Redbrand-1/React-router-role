import { Auth, Register } from '../pages/login'
import { Home } from '../pages/main'

import AppsIcon from '@material-ui/icons/Apps'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core'

type RouterInt = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> ,
  to: string ,
  label: string ,
  component: () => JSX.Element ,
  role: string
} []

export const initRole = [
  {
    role: 'logout' ,
    redirect: '/auth'
  },
  {
    role: 'main' ,
    redirect: '/home'
  }
]

export const RouterSetting: RouterInt = [
  {
    icon: AppsIcon ,
    to: '/auth' ,
    label: 'Авторизация' ,
    component: Auth ,
    role: initRole[0].role
  },
  {
    icon: AppsIcon ,
    to: '/register' ,
    label: 'Регистрация' ,
    component: Register ,
    role: initRole[0].role
  },
  {
    icon: AppsIcon ,
    to: '/home' ,
    label: 'Регистрация' ,
    component: Home ,
    role: initRole[1].role
  },
]