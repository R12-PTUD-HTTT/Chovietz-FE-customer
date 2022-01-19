import { createSelector } from "reselect";

const user = (state) => state.user;

export const selectIsLogin = createSelector(user, (state) => state.isLogin);
