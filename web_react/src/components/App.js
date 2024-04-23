import React from 'react';
import NavBar from './NavBar'
import LearnPage from './LearnPage';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <NavBar />
                <LearnPage />
            </div>
        );
    }
}

export default App;