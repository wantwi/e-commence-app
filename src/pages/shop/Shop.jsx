import React, { Component } from 'react'

import SHOP_DATA from './fakeData';
import PreviewComponent from '../../components/preview-collectionComponent/PreviewComponent';

 class Shop extends Component {

    constructor(){
        super();

        this.state ={
            collections:SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div>

              {
                  collections.map(item =>  <PreviewComponent key={item.id} title ={item.title}  items ={item.items}/> )
              }

              
              
                
            </div>
        )
    }
}

export default Shop