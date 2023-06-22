import Message from './Message'
import ListGroup from './components/ListGroup'

function App() {
    return <div> <ListGroup />
        <button type="button" class="btn btn-primary" onClick={CallAPI}>Primary1</button>
    </div>;
}
function CallAPI() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://proxy.cors.sh/https://sandboxdnac.cisco.com/dna/system/api/v1/auth/token");
    xhr.withCredentials = true;
    //xhr.setRequestHeader("content-type", "application/json");
    //xhr.setRequestHeader("X-Requested-With", "t1"); 
    xhr.setRequestHeader("authorization", "Basic YWRtaW46R3JhcGV2aW5lMQ==");
    xhr.setRequestHeader("x-cors-api-key", "temp_ea991fc8160864b06d522ff2b6985297");

    xhr.send(data);
}
export default App;