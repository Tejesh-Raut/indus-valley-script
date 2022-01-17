import * as actionTypes from './actionTypes';
import { Constants } from '../utils/Constants';

const initialState: AppState = {
  theme: { palette: { mode: Constants.themeType.light } }
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME: {
      const newThemeType = (state.theme.palette.mode == Constants.themeType.light)
          ? Constants.themeType.dark : Constants.themeType.light;
      return {
        ...state,
        theme: { ...state.theme, palette: { ...state.theme.palette, mode: newThemeType } }
      };
    }
  }
  return state;
};

export default reducer;
