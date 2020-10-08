import React from 'react'
import { useDispatch } from 'react-redux'

export const Auth = () => {
  const dispatch = useDispatch()
  const dsd = () => {
    dispatch({
      type: 'ADD_ACTIVE_ROLE' ,
      activeRole: 'main'
    })
  }


  return (
    <>
    <button onClick={() => dsd()}>sadsadas</button>
    </>
  )
}