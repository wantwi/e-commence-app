import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import "./PreviewComponent.scss"
function PreviewComponent(props) {
  
    const {title, items} = props
  
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                    {
                        items.filter((item,indx)=> indx <4).map(item =>(<CollectionItem key={item.id} item={item}/>))
                    }
            </div>
            
        </div>
    )
}


//preview collection
export default PreviewComponent
