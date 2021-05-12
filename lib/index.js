import FormShow from './form-show'
import FormShowRow from './form-show-row'
import FormShowCol from './form-show-col'
import FormShowItem from './form-show-item'

const Component = {
  install (Vue) {
    Vue.component(FormShow.name, FormShow)
    Vue.component(FormShowRow.name, FormShowRow)
    Vue.component(FormShowCol.name, FormShowCol)
    Vue.component(FormShowItem.name, FormShowItem)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  Component.install(window.Vue)
}

export default Component

