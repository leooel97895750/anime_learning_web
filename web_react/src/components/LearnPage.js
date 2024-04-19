import React from 'react';
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

            // 將資料庫取回來的Report條列掛載，並加入雙擊事件
            // let all = dateJson.map((val, i) => {
            //     let name = React.createElement('div', {className: 'old', key: i+'name'}, val.Name);
            //     let patientID = React.createElement('div', {className: 'old', key: i+'patientID'}, val.PatientID.split(':')[0]);
            //     let studyDate = React.createElement('div', {className: 'old', key: i+'studyDate'}, val.StudyDate);
            //     let since = React.createElement('div', {className: 'old', key: i+'since'}, val.Since.split('T')[0]);
            //     let tDate = React.createElement('div', {className: 'old2', key: i+'tDate'}, this.isNull(val.TechnicianDate, val.Technician));
            //     let pDate = React.createElement('div', {className: 'old2', key: i+'pDate'}, this.isNull(val.PhysicianDate, val.Physician));
            //     let eachOldBlock = React.createElement('div', {className: 'oldBlock', key: i+'eachOldBlock'}, [name, patientID, studyDate, since, tDate, pDate]);
            //     let li = React.createElement('li', {key: i+'li', onDoubleClick: () => this.loadReport(val.RID)}, [eachOldBlock]);
            //     return li;
            // });
            // ReactDOM.render(all, document.getElementById("oldReportList"));

        });
    }

    render(){
        return(
            <div>
                <input id="keyword_input" />
                <button onClick = {this.query_keyword}>查詢</button>
                <div>

                </div>
            </div>
        );
    }
}

export default LearnPage;