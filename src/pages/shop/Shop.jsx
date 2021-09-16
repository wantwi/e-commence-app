import React from 'react'
//import {connect} from "react-redux"
//import {createStructuredSelector} from "reselect"
//import {selectCollections} from "../../redux/shop/shop.selector"
// import SHOP_DATA from '../../redux/shop/fakeData';
//import PreviewComponent from '../../components/preview-collectionComponent/PreviewComponent';
import CollectionOverviewComponent from '../../components/collection-overview/CollectionOverviewComponent';
import {Route} from "react-router-dom"
import CollectionPage from '../collection/CollectionComponent';
//function Shop({collections}) {

function Shop({match}) {
    return (
        <div>

            <Route exact path={`${match.path}`} component={CollectionOverviewComponent} />
            <Route path ={`${match.path}/:collectionId`} component={CollectionPage} />
            
        </div>
    )
}


export default Shop

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })

//export default connect(mapStateToProps)(Shop)


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