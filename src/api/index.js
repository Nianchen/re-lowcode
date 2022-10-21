import axios from "axios";

function GetOneYan(){
    let OneYan = ''
    axios.get("https://v1.hitokoto.cn").then((res)=>
    {
     OneYan = res.data.hitokoto
    })
    return OneYan
}

export {
    GetOneYan
}