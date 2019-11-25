
import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

/**
 *  页面查询
 * @param page  当前页
 * @param size  每页显示的条数
 * @param param 查询的条件
 * @return url 路径
 */
export function page_list(page, size, params) {
  //将param转为json字符串
  let query = querystring.stringify(params)
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+"?"+query);

}
