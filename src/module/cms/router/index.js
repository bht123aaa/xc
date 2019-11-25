import Home from '@/module/home/page/home.vue';//导入主页面    第一步
import page_list from '@/module/cms/page/page_list.vue';//导入page_list文件 第二步
export default [
  {
    path: '/cms',//访问的路径
    component: Home,//主菜单
    name: 'CMS内容管理',//展示的名称
    hidden: false,//是否显示
    children: [
      {path: '/cms/page/list', name: '页面列表', component: page_list, hidden: false}
    ]
  }
]


