import {createSelector} from "reselect"

const COLLECTION_ID_MATCH ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop =state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)



export const selectCollectioCategory = collectionId =>createSelector(
    [selectCollections],
    collections => collections[collectionId]
)

export const selectionForPreview  = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key =>collections[key])
)

