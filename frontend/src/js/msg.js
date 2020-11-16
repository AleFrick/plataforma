const typeMsg ={ warn:'warn', sucess:'sucess', error:'error', info:'info' }

function notificacao(message, type, toast){        
    if(message.trim !== ''){
        switch (type) {
            case typeMsg.sucess:
                toast.success(message);
                break;
            case typeMsg.warn:
                toast.warn(message);
                break;
            case typeMsg.error:
                toast.error(message);
                break;
            default:
                toast.info(message);
        }
    }
}


export { typeMsg, notificacao }