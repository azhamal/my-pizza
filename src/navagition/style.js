import { Button } from "antd";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
display:flex;
justify-content:space-between;
aling-items:center;
padding-top:1rem;

`
export const Logo = styled.div`
font-size:30px;
`
export const ButtonCart = styled(Button)`
color: white;
background-color: gold;

&:hover {
    background-color:#DEE138;
    border-color:#DEE138!important;
}
&:hover span{
color:white;
}
`
export const RightNavigation = styled.div`
display:flex;
gap:10px;
aling-items:center;
`