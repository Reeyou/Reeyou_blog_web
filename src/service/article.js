import request from '@/utils/request'
import formatParam from '@/utils/formatParam'

// export async function getArticleList(params) {
//   return request('/api/addArticle', {
//     method: 'POST',
//     body: {
//       ...params
//     }
//   })
// }
export async function getArticleList() {
  return request('/api/getArticleList')
}
export async function getArticleDetail(params) {
  return request(`/api/getArticleDetail/${formatParam(params)}`)
}