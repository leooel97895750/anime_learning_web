import React from 'react';
import ReactDOM from 'react-dom'
import {getAPI} from '../utility/api.js';



class LearnPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    query_keyword = () => {

        console.log('query_keyword');
        let keyword = document.getElementById("keyword_input").value;
        console.log(keyword);

        let get_sentence_by_keyword_url = "http://localhost:3001/getSentenceByKeyword?keyword=" + keyword;
        getAPI(get_sentence_by_keyword_url, (xhttp) => {
            let sentence_json = JSON.parse(xhttp.responseText);
            console.log(sentence_json);

            for(let i=0; i<3; i++){
                let param = {
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube.com/embed/cclHDzs5xOo',
                    title: 'YouTube video player',
                    frameBorder: '0',
                    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                    referrerPolicy: 'strict-origin-when-cross-origin',
                    allowFullScreen: '1'
                }
                let youtube_iframe = React.createElement('iframe', param);
                ReactDOM.render(youtube_iframe, document.getElementById("youtube_list"));
            }
        });
    }

    render(){
        return(
            <div>
                <input id='keyword_input' />
                <button onClick = {this.query_keyword}>查詢</button>
                <div id='youtube_list'></div>
            </div>
        );
    }
}

export default LearnPage;