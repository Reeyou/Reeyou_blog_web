import request from '@/utils/request'

export async function getArticleList(params) {
  return request('/api/addArticle', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function getArticleDetail() {
  return request('/api/getArticleList')
}