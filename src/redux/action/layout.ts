import { SET_LAYOUT_SIZE, SET_SIDEBAR_OPEN } from "@/redux/type";

export const actSetLayoutSize = (payload: string) => ({
  type: SET_LAYOUT_SIZE,
  payload,
});

export const actSetSideBarOpen = (payload: boolean) => ({
  type: SET_SIDEBAR_OPEN,
  payload,
});
