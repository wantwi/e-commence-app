import React from 'react'
import './Hompage.scss'
// import MenuItemComponent from '../../components/menu-item/MenuItemComponent'
import DirectoryComponent from '../../components/Directory/DirectoryComponent'
function Homepage(){
    return (
        <div className="homepage">

            <DirectoryComponent/>
            {/* <div className="directory-menu">
                   <MenuItemComponent title ="HATS"/>
                   <MenuItemComponent title ="JACKETS"/>
                   <MenuItemComponent title ="SEANKERS"/>
                   <MenuItemComponent title ="MENS"/>
                   <MenuItemComponent title ="WOMENS"/>
            </div> */}
            
        </div>
    )
}

export default Homepage