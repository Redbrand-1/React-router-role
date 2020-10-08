import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core'

export const ADD_WIDTH = 'ADD_WIDTH'
export interface TypeWidth {
  type: string
  width: number
}

export const ADD_ACTIVE_ROLE = 'ADD_ACTIVE_ROLE'
export interface TypeUser {
  type: string
  activeRole: string
}

export const ADD_ROUTER_NAVBAR = 'ADD_ROUTER_NAVBAR'
export interface TypeRouterNavbar {
  type: string ,
  routers: [{
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> ,
    to: string ,
    label: string ,
  }]
}

