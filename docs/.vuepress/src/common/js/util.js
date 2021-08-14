/**
 * 防抖函数
 * @param {function} func 原函数
 * @param {number} wait 多少毫秒执行一次
 */
export function debounce (func, wait) {
  let timerId = null
  return function (...args) {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
      timerId = null
    }, wait)
  }
}

/**
 * 下载文件
 * @param {string} url 文件链接
 * @param {string} fileName 文件名
 */
export function downloadFile(url, fileName) {
  const a = document.createElement("a")
  a.download = fileName
  a.href = url
  a.style.display = "none"
  document.body.appendChild(a)
  a.click()
  a.remove()
}