
/**
 * 防抖函数
 * @param {*} fn
 * @param {*} delay
 * @param {*} immediate
 */
export const Debounce = (fn, delay = 300, immediate = false) => {
  let timer; // 定时器

  return function (...args) { // 形成闭包  外部执行的函数其实是这个return出去的函数。

    // args 为函数调用时传的参数。

    let context = this; // this 为函数执行时的this绑定。

    timer && clearTimeout(timer); // 当函数再次执行时，清除定时器，让定时器重新开始计时

    // immediate为true 表示第一次触发就执行
    if (immediate) {
      // 执行一次之后赋值为false  
      immediate = false;
      fn.apply(context, args)
    }
    // 利用定时器，让指定函数延迟执行。
    timer = setTimeout(function () {
      // immediate 赋值为true  下次输入时 还是会立即执行
      immediate = true;
      // 执行传入的指定函数，利用apply更改传入函数内部的this绑定，传入 args参数
      fn.apply(context, args);
    }, delay)
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
  return function () {
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
      setTimeout(function () {
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
