import http from '../http-common'
export function getComments() {
  return http('comments?postId=1')
}

export function addComment(payload) {
  return http({
    url: 'comments',
    method: 'post',
    data: { ...payload, postId: 1, email: 'hannela@gmail.com' },
  })
}
