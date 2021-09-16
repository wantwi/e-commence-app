import styled,{css} from "styled-components"
import { Link } from "react-router-dom"

const optionStyle = css`
padding: 10px 15px;
cursor: pointer;
`

export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;


export const LogoContainer = styled(Link)`
height: 100%;
margin-top: -45px;
`

export const OptionsContainer = styled(Link)`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
export const OptionLink = styled(Link)`
${optionStyle}`

export const OptionDiv = styled.div`
${optionStyle}`