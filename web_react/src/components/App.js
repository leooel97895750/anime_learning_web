import React from 'react';
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
                <h1>從動漫學日文</h1>
                <LearnPage />
            </div>
        );
    }
}

export default App;