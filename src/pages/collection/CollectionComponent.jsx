import React from 'react'
import "./CollectionComponent.scss"
import {connect} from "react-redux"
import CollectionItem from '../../components/collection-item/CollectionItem'
import {selectCollectioCategory} from "../../redux/shop/shop.selector"

function CollectionPage({collection}) {
    console.log({collection});
 const {title, items} = collection
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                 
                }

            </div>
        </div>
    )
}

const mapStateToProps =(state,ownProps)=>({
    collection : selectCollectioCategory(ownProps.match.params.collectionId)(state)
})

export default  connect(mapStateToProps)(CollectionPage)
