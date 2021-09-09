import React from 'react'
import './CollectionItem.scss'

function CollectionItem(props) {
    const {id,name,price,imageUrl} = props
    return (
        <div className="collection-item">

            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="name">{price}</span>

            </div>
            
        </div>
    )
}

export default CollectionItem
