
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CourseProvider from './store/provider/CourseProvider.tsx'
import CheckboxProvider from './store/provider/CheckBoxProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
<CheckboxProvider>
<CourseProvider>
  <App />
  </CourseProvider>
</CheckboxProvider>
  </>,
)
