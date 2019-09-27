import request from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function sendCode(params) {
  return request('/api/sendCode', {
    method: 'POST',
    body: {
      ...params
    }
  })
}