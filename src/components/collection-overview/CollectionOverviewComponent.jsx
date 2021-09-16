import React from 'react'
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
import PreviewComponent from '../preview-collectionComponent/PreviewComponent';
import {selectionForPreview} from "../../redux/shop/shop.selector"
import './CollectionOverviewComponent.scss'


function CollectionOverviewComponent({collections}) {
    return (
        <div className="collection-overview">
              {
                  collections.map(item =>  <PreviewComponent key={item.id} title ={item.title}  items ={item.items}/> )
              }
        </div>
    )
}



const mapStateToProps = createStructuredSelector({
    collections: selectionForPreview
})

export default connect(mapStateToProps)(CollectionOverviewComponent)
