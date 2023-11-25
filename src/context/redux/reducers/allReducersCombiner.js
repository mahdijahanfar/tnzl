import { combineReducers } from "redux";
import { drawer } from "./drawerReducer";
import { dialog } from "./dialogReducer";
import {
    firstSearchLayer,
    secondSearchLayer
} from "./searchLayersReducer";
import {
    homeDataImages,
    homeDataNews,
    homeDataArticles,
    homeDataPoems,
} from './homeDataReducer';
import {
    soorehListData
} from './soorehListDataReducer';

export const allReducersCombiner = combineReducers({
    drawer,
    dialog,
    homeDataNews,
    homeDataImages,
    homeDataArticles,
    homeDataPoems,
    soorehListData,
    firstSearchLayer,
    secondSearchLayer,
})