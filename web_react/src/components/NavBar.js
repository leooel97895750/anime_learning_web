import React from 'react';
import '../css/navbar.css';


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div style={{backgroundColor: '#ff8ec0', padding: '10px', position: 'relative'}}>
                <span style={{color: 'white', fontSize: '30px', fontWeight: 'bold'}}>看動漫學日文</span>
                <div style={{position: 'absolute', right: '0px', bottom: '7px'}}>
                    <span className='nav_bar_button'>搜動漫</span>
                    <span className='nav_bar_button'>單字庫</span>
                </div>
                
            </div>
        );
    }
}

export default NavBar;