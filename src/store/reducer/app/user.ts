import { TypeUser, ADD_ACTIVE_ROLE  } from '../../../constant/type'
const initState  = {
  activeRole: 'logout'
}

export const user = ( state = initState, action: TypeUser ) => {
  switch (action.type) {
    case ADD_ACTIVE_ROLE   : {
      return {
        activeRole: action.activeRole
      }
    }
    default:
      return state
  }
}