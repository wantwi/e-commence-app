import React from 'react'
import {createStructuredSelector} from "reselect"
import {getCollections} from "../../redux/shop/shop.selector"
import {connect} from "react-redux"

import PreviewComponent from '../../components/preview-collectionComponent/PreviewComponent';




function Shop({collections}) {
    return (
        <div>

              {
                  collections.map(item =>  <PreviewComponent key={item.id} title ={item.title}  items ={item.items}/> )
              }
                
            </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: getCollections
})

export default connect(null,mapStateToProps)(Shop)



//  class Shop extends Component {

//     constructor(){
//         super();

//         this.state ={
//             collections:SHOP_DATA
//         }
//     }

//     render() {
//         const {collections} = this.state
//         return (
//             <div>

//               {
//                   collections.map(item =>  <PreviewComponent key={item.id} title ={item.title}  items ={item.items}/> )
//               }

              
              
                
//             </div>
//         )
//     }
// }

// export default Shop