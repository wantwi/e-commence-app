import {createSelector} from "reselect"

const getCollectionData =state => state.collections;

export const getCollections = createSelector(
    [getCollectionData],
    collections => collections
)