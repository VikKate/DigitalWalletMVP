/** Update selected route name */
export const routeChanged = (state, action) => {
  state.selectedRoute = action.payload || initialState.selectedRoute;
};
