import { BeerActionTypes } from "./beers.model";

const defaultBeersState = {
  items: [],
  newItems: [],
  loading: false
};
export const beersReducer = (state = defaultBeersState, action) => {
  switch (action.type) {
    case BeerActionTypes.BEERS_SET:
      return { ...state, items: action.beers };
    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true };
    case BeerActionTypes.BEERS_FETCH_SUCCESS:
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false };
    case BeerActionTypes.BEERS_SET_NEW:
      return { ...state, newItems: [...state.newItems, action.beer] };
    case BeerActionTypes.BEERS_UPDATE_RATE:
      return {
        ...state,
        items: state.items.map(item =>
          item.uuid === action.beer.uuid ? action.beer : item
        )
      };
    default:
      return state;
  }
};
