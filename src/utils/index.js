
/**
 * 防抖函数
 * @param {*} fn
 * @param {*} delay
 * @param {*} immediate
 */
export const Debounce = (fn, delay = 300, immediate = false) => {
  let timer = null // 闭包存储setTimeout状态
  return function() {
    let self = this // 事件源this
    let args = arguments // 接收事件源的event
    if (timer) clearTimeout(timer) // 存在就清除执行fn的定时器
    if (immediate) {
      // 立即执行
      let callNow = !timer // 执行fn的状态
      timer = setTimeout(function() {
        timer = null
      }, delay)
      if (callNow) fn.apply(self, args)
    } else {
      // 非立即执行
      timer = setTimeout(function() {
        // 或者使用箭头函数将this指向dom
        fn.apply(self, args)
      }, delay)
    }
  }
}

/**
 * 节流函数
 * @param {*} fn
 * @param {*} delay
 * @param {*} immediate
 */
export const Throttle = (fn, delay = 500, immediate = false) => {
  let preTime = 0 // 记录上一次执行时间
  return function() {
    let self = this, // 保留执行时候的的this
      args = [...arguments], // 执行时候的传入参数
      nowTime = +new Date(), // 记录当前的时间
      flag = nowTime - preTime >= delay // 执行命令
    if (immediate) {
      // 是否立即执行
      if (!flag) return
      preTime = nowTime // 更新执行时间
      fn.apply(self, args)
    } else {
      if (!flag) return // 不满足执行条件
      preTime = nowTime
      setTimeout(function() {
        fn.apply(self, args)
      }, delay)
    }
  }
}

/**
 * 确定设备是移动端还是pc端？
 */
export const deviceType = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop'
}
