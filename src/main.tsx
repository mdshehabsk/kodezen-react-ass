
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CourseProvider from './store/provider/CourseProvider.tsx'
import CourseFilterProvider from './store/provider/CourseFilterProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>

<CourseFilterProvider>
<CourseProvider>
  <App />
  </CourseProvider>
</CourseFilterProvider>
  </>,
)
