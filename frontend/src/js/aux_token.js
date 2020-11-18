import Moment from 'moment'

const TOKEN_APP = '@EntreLinhas:JWT_TOKEN'

function toTimestamp(year,month,day,hour,minute,second){
    var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
    return datum.getTime()/1000;
}

function toDateTime(value){
    let unix_timestamp = value
    var date = new Date(unix_timestamp * 1000);

    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let formaDate = `${day}/${month}/${year}`

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
        
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return {date:formaDate, hora:formattedTime}
}


function setLogin(token){ 
    let date = Date.now()
   // let strDate = `${Date.now().getHours()}:${Date.now().getMinutes()}`
    let dateMomente = Moment()
    //dateMomente.add(15,'minute')
    /* (year,month,day,hour,minute,second) */
    let expire =   toTimestamp(
            dateMomente.year(),
            dateMomente.month(),
            dateMomente.day(),
            dateMomente.hour(),
            dateMomente.minute(),
            dateMomente.second() 
        )
        
    /* PRECISO VER COMO TRANSFORMAR O JSON PARA SHA256 */
    localStorage.setItem(TOKEN_APP, JSON.stringify(
        {
            'token': token,
            'expire': expire
        }
    ));
    //localStorage.setItem('@SuaAplicacao:JWT_TOKEN', 'seutokenjwt');
}

function IsLogged(){
    return !!localStorage.getItem(TOKEN_APP);
}

function IsLoggedBool(){
    if(localStorage.getItem(TOKEN_APP) !== ''){
        return true
    }else{
        return false
    }
}

function RemoveToken(){
    localStorage.removeItem(TOKEN_APP);    
}


export { TOKEN_APP, setLogin, IsLogged, RemoveToken, IsLoggedBool }