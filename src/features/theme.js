import { createAction, createReducer } from "@reduxjs/toolkit"

export const toggleTheme = createAction('theme/toggle')
export const setTheme = createAction('theme/set')
// On utilise des variables pour les noms des actions
// pour éviter les fautes de frappe
export default createReducer('light', (builder) => {
  return builder
  .addCase(toggleTheme, (state) => {
    return state === 'light' ? 'dark' : 'light'
  })
  .addCase(setTheme, (state, action) => {
    return action.payload
  })

})


