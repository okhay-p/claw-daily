import { StrictMode } from 'react/client'
import App from './App'
import './index.css'

createInertiaApp(App).mount('#app', document.getElementById('root')!)
export default defineConfig({
  plugins: [react()],
})
