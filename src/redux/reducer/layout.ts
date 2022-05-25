import { ReduxAction } from "@/interface";
import { SET_LAYOUT_SIZE, SET_SIDEBAR_OPEN } from "@/redux/type";
import { SCREEN_SIZE } from "@/config/constant";

const initialState = {
  isTabletSize: false,
  isDesktopSize: false,
  isMobileSize: true,
  isSidebarOpen: true,
};

const reducer = (state = initialState, action: ReduxAction) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: payload,
      };

    case SET_LAYOUT_SIZE:
      if (payload === SCREEN_SIZE.mobile) {
        return {
          ...state,
          isMobileSize: true,
          isTabletSize: false,
          isDesktopSize: false,
        };
      }

      if (payload === SCREEN_SIZE.tablet) {
        return {
          ...state,
          isMobileSize: false,
          isTabletSize: true,
          isDesktopSize: false,
        };
      }

      if (payload === SCREEN_SIZE.desktop) {
        return {
          ...state,
          isMobileSize: false,
          isTabletSize: false,
          isDesktopSize: true,
        };
      }

    default:
      return state;
  }
};

export default reducer;
