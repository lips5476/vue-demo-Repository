// customRef用于创建一个自定义的ref   可以自己定义收集依赖和触发更新
// trick收集依赖, trigger触发更新
import { customRef } from 'vue'
export default function debounceRef(value) {
  let timer = null
  return customRef((trick, trigger) => {
    return {
      get() {
        trick()  //收集依赖
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() //触发更新
        }, 1000)
      }
    }
  })
}
