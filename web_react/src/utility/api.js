export function getAPI(url, callFun) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
  
        if (this.readyState === 4 && this.status === 200) {
            callFun(this);
        }
        //請求限制觸發
        else if(this.readyState === 4 && this.status === 429) {
            alert('重複太多次了');
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}