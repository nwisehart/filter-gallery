import { combineReducers } from "../../Component";

import detailsPanel, { DetailsPanelState, initialState as detailsPanelInitial } from "./detailsPanel";
import resultPanel, { ResultPanelState, initialState as resultPanelInitial } from "./resultPanel";
import filters, { FiltersState, initialState as filtersInitial } from "./filters";
import tagsFilter, { TagsFilterState, initialState as tagsFilterInitial } from "./tagsFilter";
import pagination, { PaginationState, initialState as paginationInitial } from "./pagination";
import sort, { SortState, initialState as sortInitial } from "./sort";
import viewer, { ViewerState, initialState as viewerInitial } from "./viewer";

export interface UIState {
    detailsPanel: DetailsPanelState;
    resultPanel: ResultPanelState;
    filters: FiltersState;
    tagsFilter: TagsFilterState;
    pagination: PaginationState;
    sort: SortState;
    viewer: ViewerState;
}
export const initialState: UIState = {
    detailsPanel: detailsPanelInitial,
    resultPanel: resultPanelInitial,
    filters: filtersInitial,
    tagsFilter: tagsFilterInitial,
    pagination: paginationInitial,
    sort: sortInitial,
    viewer: viewerInitial
};

export default combineReducers<UIState>({
    detailsPanel,
    resultPanel,
    filters,
    tagsFilter,
    pagination,
    sort,
    viewer
});
