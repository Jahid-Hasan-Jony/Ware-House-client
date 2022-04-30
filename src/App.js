import { Route, Routes } from 'react-router-dom';
import './App.css'
import Blogs from "./Component/Blogs/Blogs";
import PageNotFound from "./Component/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
