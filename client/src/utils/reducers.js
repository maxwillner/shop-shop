import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from "./actions";
  import { useReducer } from "react";

export const reducer = (state, action) => {
    switch (action.type) {
    // if action type value is the value of "UPDATE_PRODUCTs", return a new state object with an updated products array
    case UPDATE_PRODUCTS:
        return {
            ...state,
            products: [...action.products],
        };
    // if action type value is the value of "UDPATE_CATEGORIES", return a new state object with an updated categories array
    case UPDATE_CATEGORIES:
        return {
            ...state,
            categories: [...action.categories]
        };
    case UPDATE_CURRENT_CATEGORY:
        return {
            ...state,
            currentCategory: action.currentCategory
        }
    // if it's none of these actions, do not update state at all and keep the things the same
    default:
        return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}
