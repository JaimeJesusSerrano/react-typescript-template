import React, { useReducer } from 'react'

import { SET_OPEN, SET_STATE } from './actions'
import { context, initialState } from './index'
import { ActionType, StateType } from './types'

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer((state: StateType, action: ActionType) => {
    switch (action.type) {
      case SET_OPEN:
        return { ...state, Component: action.value.Component, isOpen: action.value.isOpen }
      case SET_STATE:
        return action.value
      default:
        throw new Error()
    }
  }, initialState)

  return <context.Provider value={{ dispatch, state }}>{children}</context.Provider>
}

export default Provider
