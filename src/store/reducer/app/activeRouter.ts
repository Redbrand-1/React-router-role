import { ADD_ROUTER_NAVBAR , TypeRouterNavbar  } from '../../../constant/type'
const initState  = {
  routers: [{
    icon: '',
    to: '' ,
    label: '' ,
  }]
}

export const activeRouters = ( state = initState, action: TypeRouterNavbar ) => {
  switch (action.type) {
    case ADD_ROUTER_NAVBAR   : {
      return {
        routers: action.routers
      }
    }
    default:
      return state
  }
}