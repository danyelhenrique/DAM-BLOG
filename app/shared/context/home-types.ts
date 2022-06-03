export type actionsTypes =
  | "@posts/todays"
  | "@posts/most-recents"
  | "@posts/highlight";

export type InitialState = {
  heroSection: any;
  todaysPost: any;
};

export type typeReducer = {
  type: actionsTypes;
  payload: any;
};
