import Confirm from './Confirm'
import Vue from 'vue'

export default {
    install(instance, options) {
        const ConfirmComponent = Vue.extend(Confirm);
        options = options || {
            confirmText: 'Ok',
            cancelText: 'Cancelar'
        };
        instance.prototype.$confirm = function(alertOptions) {
            alertOptions = alertOptions || {
                width: 300,
                content: 'Tem certeza?'
            };
            return new Promise((resolve, reject) => {
                const element = new ConfirmComponent({
                    propsData: Object.assign({active: true}, alertOptions, options)
                })
                element.$on('confirm', function() {
                    resolve(true)
                })
                element.$on('cancel', function() {
                    resolve(false)
                })
                document.body.appendChild(element.$mount().$el)
            })
        }
    }
}
