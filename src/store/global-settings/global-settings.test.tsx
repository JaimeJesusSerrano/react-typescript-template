import React, { useContext } from 'react'

import { render, screen } from '@testing-library/react'

import { context, initialState } from './index'
import { ContextType } from './types'

const ComponentToTest = () => {
  const globalDialog = useContext(context)
  return <>{globalDialog.state.isAnyValue ? 'Is any value' : 'Is not any value'}</>
}

const renderContext = (currentContext: ContextType) => {
  return render(
    <context.Provider value={currentContext}>
      <ComponentToTest />
    </context.Provider>
  )
}

describe('Store > Global settings', () => {
  test('initial state', () => {
    const context: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: initialState,
    }

    renderContext(context)
    expect(screen.queryByText('Is not any value')).toBeInTheDocument()
  })

  test('state updated', () => {
    const context: ContextType = {
      // eslint-disable-next-line
      dispatch: () => {},
      state: {
        isAnyValue: true,
      },
    }

    renderContext(context)
    expect(screen.getByText('Is any value')).toBeInTheDocument()
  })
})
