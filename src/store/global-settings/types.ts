import { ActionType as ActionTypeBase, ContextType as ContextTypeBase } from 'types/Context'

export interface StateType {
  isAnyValue: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionType = ActionTypeBase<any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextType = ContextTypeBase<any, StateType>
