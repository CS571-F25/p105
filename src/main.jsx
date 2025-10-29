import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import CalorieCartApp from './components/structural/CalorieCartApp.jsx'

createRoot(document.getElementById('root')).render(
  <CalorieCartApp />
)
