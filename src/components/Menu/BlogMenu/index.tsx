import React from 'react';
import styled from 'styled-components';
import menuData from '../../../utils/data/blog.menu.json';
import {Row, Col} from 'antd';
import './style.css';
import HamburgerButton from '../../HamburgerButton/';
const SCMenuBlog = styled.div`
    height : 100px;
    width :100%;
    display : flex;
    align-items: center;
    flex-direction: row-reverse;
`

export default class BlogMenu extends React.Component{
    state = {
        toggle : false,
        widthNavMenu : '0px',
        colorOfButton: 'black',
        optionsMenu : [
            {
                "id" : "oMenu1",
                "name" : "About",
                "path" : "#"
            },
            {
                "id" : "oMenu2",
                "name" : "Services",
                "path" : "#"
            },
            {
                "id" : "oMenu3",
                "name" : "Clients",
                "path" : "#"
            }
        ]
    }
    render(){
        return(
            <SCMenuBlog>
                <div  id="mySidenav" className="sidenav" style={{
                    width : `${this.state.widthNavMenu}`,
                }}>
                {
                    this.state.optionsMenu.map((item)=>{
                        return <a key={item.id} href={item.path}>{item.name}</a>
                    })
                }
                </div>
                <HamburgerButton color={this.state.colorOfButton} toggle = {this.state.toggle} onClick={()=>{
                    this.setState({
                        toggle : !this.state.toggle,
                        widthNavMenu : !(this.state.toggle) ? '250px' : '0px',
                        colorOfButton : !(this.state.toggle) ? 'white' : 'black'
                    })

                }} />
            </SCMenuBlog>
        );
    }
}