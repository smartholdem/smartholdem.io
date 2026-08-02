import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/theme.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout
}
