import {createSelector} from "reselect"

const getDirectory =state => state.directory;

export const getSections = createSelector(
    [getDirectory],
    directory => directory
)