import DefaultTheme from 'vitepress/theme-without-fonts'
import XiaodiguaLayout from './XiaodiguaLayout.vue'
import PandaHR from './components/PandaHR.vue'
import Contact from './components/Contact.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout: XiaodiguaLayout,
  enhanceApp({ app }) {
    app.component('panda-hr', PandaHR)
    app.component('contact-us', Contact)
  }
}
