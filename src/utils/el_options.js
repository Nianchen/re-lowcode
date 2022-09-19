const elbutton = {
  id: 1,
  name: "elbutton",
  title: "基础按钮",
  ShowOption: {
    tag:'elbutton',
    DetailOptions: {
      文本内容: "主要按钮",
      按钮类型: "primary"
    },
    LayOptions: {
      display: "inline",
      margin: "5px",
    },
  },
};

const eltxt = {
  id:2,
  name:'eltxt',
  title:"基础文本",
  ShowOption: {
    tag:'eltxt',
    DetailOptions: {
     
    },
    LayOptions: {
    
    },
  },
}

const elprogress = {
  id:3,
  name:"elprogress",
  title:"进度条",
  ShowOption: {
    tag:'elprogress',
    DetailOptions: {
    
    },
    LayOptions: {
    
    },
  },
}

const elpagination = {
  id:4,
  name:'elpagination',
  title:"分页栏",
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

export { Ellist };
