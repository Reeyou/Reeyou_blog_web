import request from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function getMessage() {
  return request('/api/getMessage')
}
export async function addMessage(params) {
  return request('/api/addMessage', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function deleteMsg(params) {
  return request('/api/deleteMessage', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function replyMsg(params) {
  return request('/api/replyMessage', {
    method: 'POST',
    body: {
      ...params
    }
  })
}