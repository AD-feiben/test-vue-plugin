import ToastTemp from './toast.vue'

const Toast = {}

Toast.install = function (Vue, options) {
  let ToastConstructor = Vue.extend(ToastTemp)
  let toastInstance = new ToastConstructor()

  let opt = {
    position: 'middle',
    duration: 2500
  }

  for (let attr in options) {
    opt[attr] = options[attr]
  }

  Vue.prototype.$toast = (tip, position = opt.position) => {
    if (document.getElementsByClassName('vue-toast').length) {
      // 已经存在 toast
      return false
    }

    for (let property in opt) {
      toastInstance[property] = opt[property]
    }
    toastInstance.tip = tip
    toastInstance.position = position

    let tpl = toastInstance.$mount().$el
    document.body.appendChild(tpl)
    setTimeout(function () {
      document.body.removeChild(tpl)
    }, toastInstance.duration)
  }

  ['top', 'middle', 'bottom'].forEach(position => {
    Vue.prototype.$toast[position] = (tip) => {
      return Vue.prototype.$toast(tip, position)
    }
  })
}

export default Toast
