import { Navigate, Route, Routes } from 'react-router'
import { HeaderComponent } from './components/headerComponent/headerComponent'
import { NewsPage } from './pages/newsPage/newsPage'
import { NewsInfo } from './pages/newsInfo/newsInfo'
import { SearchProvider } from './context/SearchContext'

function App() {

  return (
    <SearchProvider>
      <Routes>
        <Route element={<HeaderComponent/>}>
          <Route path="*" element={<Navigate to="/newsBlog" replace />} />
          <Route path='/newsBlog'>
            <Route index element={<NewsPage/>}/>
            <Route path=":id" element={<NewsInfo/>}/>
          </Route>
        </Route>
      </Routes>
    </SearchProvider>
  )
} 

export default App
