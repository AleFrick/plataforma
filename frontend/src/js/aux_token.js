const TOKEN_APP = '@EntreLinhas:JWT_TOKEN'

function setLogin(token){
    localStorage.setItem(TOKEN_APP, token);
    //localStorage.setItem('@SuaAplicacao:JWT_TOKEN', 'seutokenjwt');
}

function IsLogged(){
    return !localStorage.getItem(TOKEN_APP);
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