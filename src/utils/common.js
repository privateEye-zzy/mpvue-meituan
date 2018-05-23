function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')
  return `${t1} ${t2}`
}
// 封装Ajax
export function Ajax (opts, cb=function(){}) {
  wx.showLoading({title: '请求中...', mask: true})
  const {url, method='GET', data={}} = opts
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      header: {"content-type": "application/json"},
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete(res) {
        setTimeout(() => {
          wx.hideLoading()
          cb && cb(res)
        }, 1000)
      }
    })
  })
}
// 打开新窗口
export function openWin (url) {
  wx.navigateTo({url: url})
}
// 关闭当前页面，跳转到应用内的某个页面
export function redirectTo (url) {
  wx.redirectTo({url: url})
}
// 返回上一级窗口
export function backBeaforWin () {
  wx.navigateBack({delta: 1})
}
