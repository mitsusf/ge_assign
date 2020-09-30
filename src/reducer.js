export const initialState = {
  alerts: []
};

// reducer - the gate keeper to update state.
function reducer(state, action) {
  switch (action.type) {
    case "EMPTY_ALERTS":
      return { ...state, alerts: [] };
      break;
    case "ADD_ALERTS":
      return { ...state, alerts: [...state.alerts, action.item] };
      break;
    case "REMOVE_AN_ALERT":
      let tempAlerts = [...state.alerts];
      const index = state.alerts.findIndex(
        (alert) => alert.id === action.id
      );
      if (index >= 0) tempAlerts.splice(index, 1);
      return { ...state, alerts: tempAlerts };
      break;
    default:
      return state;
  }
}

export default reducer;
