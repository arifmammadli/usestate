import { createRoot } from 'react-dom/client'
import './index.css'
import Carousel from './carousel'

createRoot(document.getElementById('root')).render(
<div className='min-h-screen flex items-center justify-center'>
  <Carousel />
</div>)
