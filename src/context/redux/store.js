import { applyMiddleware, compose, createStore } from "redux";
import { allReducersCombiner } from "./reducers/allReducersCombiner";
import thunk from "redux-thunk";
import { homeDataImages, homeDataNews, homeDataArticles, homeDataPoems } from './actions/homeDataAction';

export const store = createStore(allReducersCombiner, compose(applyMiddleware(thunk)));

store.dispatch(homeDataNews())
store.dispatch(homeDataImages())
store.dispatch(homeDataArticles())
store.dispatch(homeDataPoems())
store.subscribe(() => console.log(store.getState()))
