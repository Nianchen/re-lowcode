9.15修改： 1.基本拖拽已经实现 2.深克隆解决 3.vuex的引入 

9.18修改： 1.实现一个组件模板 2.组件配置可自定义 3.颜色改了改

9.19修改： 1.更多基本组件以及组件列表的滚动 2.页面可以保存在本地刷新丢失 3.基本配置项的实现 4.组件可删除

9.20修改： 1.多页面切换以及本地保存（效果不是很好）后期准备用路由重写 2 页面布局调整

9.21修改： 1.页面切换功能的遮罩层优化 2页面删除功能 3.回复布局以及优化 4.网站的部署

9.22修改： 1.实在不知道写啥了 加了个打字机的头部

9.24修改： 1.细化各个组件配置情况

9.25修改： 1.加了个首屏

-------------------------------------------------------------------------------------------------------

摸了小半个月ES的东西

简单总结一下这个项目的原理，拖拽的本身还是数据，通过一个数组列表进行维护，v-for进行渲染，所以配置信息相关的都是通过修改数据引起的页面变化，所有的数据基本上都在vuex中，通过vuex完成各个组件内的数据互通，本地保存利用的是浏览器自身的存储空间，肯定是需要后续优化的，目前还没有完成所有组件的配置相关信息，因为时间也确实有限，后续肯定会一步步完善的 

