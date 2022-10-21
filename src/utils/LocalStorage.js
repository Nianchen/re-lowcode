
function SavelocalStorage(key,value){
    window.localStorage.setItem(key,value)
}

function GetlocalStorage(key){
    return  window.localStorage.getItem(key)
}

export {
    SavelocalStorage,
    GetlocalStorage
}