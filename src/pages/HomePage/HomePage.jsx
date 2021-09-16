import React from 'react'
import './Hompage.scss'
// import MenuItemComponent from '../../components/menu-item/MenuItemComponent'
import DirectoryComponent from '../../components/Directory/DirectoryComponent'
import { HomePageContainer } from './HomePageStyle'

function Homepage(){
    return (
        <HomePageContainer>
            <DirectoryComponent/>
        </HomePageContainer>
    )
}

export default Homepage