import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

const token = localStorage.getItem("_token")
axios.interceptors.request.use(
  config => {
      if(token && !config.skipAuth) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
  },
  error => {
    return Promise.reject(error)
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
