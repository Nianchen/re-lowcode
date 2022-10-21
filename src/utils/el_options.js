const PageConfig =  {
  position: "relative",
  backgroundColor: "#FFFFFF",
  height: "1000px",
  width:"1150px",
}
const elbutton = {
  id: 1,
  name: "elbutton",
  title: "基础按钮",
  type:"基础组件",
  ShowOption: {
    tag:'elbutton',
    DetailOptions: {
      txt: "主要按钮",
      type: "primary"
    },
    LayOptions: {
      display: "inline-block",
      margin: "5px",
      padding:"5px",
    },
  },
};

const eltxt = {
  id:2,
  name:'eltxt',
  title:"基础文本",
  type:"基础组件",
  ShowOption: {
    tag:'eltxt',
    DetailOptions: {
      txt: "这是一段基本内容",
    },
    LayOptions: {
      display: "inline",
      margin: "5px",
      color:"black",
      fontSize:"18px"
    },
  },
}

const elprogress = {
  id:3,
  name:"elprogress",
  title:"进度条",
  type:"基础组件",
  ShowOption: {
    tag:'elprogress',
    DetailOptions: {
      type:"line",
      percentage:30 
    },
    LayOptions: {
      width:"30%",
      margin: "5px",
    },
  },
}

const elpagination = {
  id:4,
  name:'elpagination',
  title:"分页栏",
  type:"基础组件",
  ShowOption: {
    tag:'elpagination',
    DetailOptions: {
    
    },
    LayOptions: {
     
    },
  },
}
const elcard = {
  id:5,
  name:'elcard',
  title:"简单卡片",
  type:"页面组件",
  ShowOption: {
    tag:'elcard',
    DetailOptions: {
    
    },
    LayOptions: {
     
    },
  },
}

const elswiper = {
  id:6,
  name:'elswiper',
  title:"走马灯",
  type:"页面组件",
  ShowOption: {
    tag:'elswiper',
    DetailOptions: {
    
    },
    LayOptions: {
     
    },
  },
}
var Ellist = [
  elbutton,
  eltxt,
  elprogress,
  elpagination,
  elcard,
  elswiper
]

export { Ellist,PageConfig };
