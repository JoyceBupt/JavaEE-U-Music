/* eslint-disable */
// 对*.vue文件的声明:
// 将所有*.vue文件视为DefineComponent类型,即Vue的组件类型。这样导入*.vue文件时就可以得到组件的类型信息。
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// 对Vue原型的补充声明:
// 增加了$router和$route属性,分别是Vue Router的实例和当前路由信息
// 这样在Vue实例中可以直接使用this.$router和this.$route,且有完整的类型提示
declare module "vue/types/vue" {
  import VueRouter, { Route } from "vue-router";

  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}
// 定义一个通用的响应体接口ResponseBody
interface ResponseBody {
  code: string;
  success: boolean;
  message: string;
  type: string;
  data?: any;
}
