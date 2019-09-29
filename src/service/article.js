import request from '@/utils/request'
import formatParam from '@/utils/formatParam'


export async function getArticleList() {
  return request('/api/getArticleList')
}
export async function getTagList() {
  return request('/api/getTagList')
}
export async function getArticleDetail(params) {
  return request(`/api/getArticleDetail/${formatParam(params)}`)
}
export async function getComment(params) {
  return request(`/api/getComment/${formatParam(params)}`)
}
export async function addComment(params) {
  return request('/api/addComment', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function deleteComment(params) {
  return request('/api/deleteComment', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function replyComment(params) {
  return request('/api/replyComment', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function deleteReply(params) {
  return request('/api/deleteReply', {
    method: 'POST',
    body: {
      ...params
    }
  })
}