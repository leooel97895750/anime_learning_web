import React from 'react';
import ReactDOM from 'react-dom'
import { getAPI } from '../utility/api.js';


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

            let all = sentence_json.map((val, i) => {
                let param = {
                    key: 'iframe'+i,
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube-nocookie.com/embed/' + val.YoutubeID + '?start=' + Math.floor(val.Start) + '&end=' + Math.ceil(val.Start+val.Duration),
                    title: 'YouTube video player',
                    frameBorder: '0',
                    allowFullScreen: '1'
                }
                console.log(param.src);
                let youtube_iframe = React.createElement('iframe', param);
                let start_duration = React.createElement('div', {key: 'start_duration'+i}, val.Start + ', ' + val.Duration);
                let JText = React.createElement('div', {key: 'jtext'+i}, val.JText);
                let li = React.createElement('li', {key: 'li'+i}, [youtube_iframe, start_duration, JText]);
                return li;
            });
            ReactDOM.createRoot(document.getElementById("youtube_list")).render(all);
        });
    }

    render(){
        return(
            <div>
                <input id='keyword_input' />
                <button onClick = {this.query_keyword}>查詢</button>

                <ul id="youtube_list" style={{listStyleType: 'none', padding: "0px"}}>

                </ul>
            </div>
        );
    }
}

export default LearnPage;