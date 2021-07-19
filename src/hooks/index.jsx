import React from 'react'

import { OccurrencesProvider } from './Occurrences'

export const AppProvider = ({children}) => {
  return (
    <OccurrencesProvider>
      {children}
    </OccurrencesProvider>
  )
}

export default AppProvider