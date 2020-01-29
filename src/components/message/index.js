import Message from './Message.vue'
import Vue from 'vue'

const MessageInstance = Vue.extend(Message)

const message = (options) => {
    console.log(typeof options )
    console.log(options)
    options.snackbar=true
    const instance = new MessageInstance({
        propsData:{
            ...options
        }
    })
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    return instance.vm
}

export default (Vue) => {
    Vue.prototype.$message = message
}