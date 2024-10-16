import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import AdvancedLayout from './../layout/advanced/AdvancedLayout'
import NotFound from './../NotFound'
import About from './../../pages/About'
import SmartCounter from './../../pages/SmartCounter'
import Contact from './../../pages/Contact'
import Home from './../../pages/Home'
import NewProduct from './../../pages/NewProduct'
import Product from './../../pages/Product'
import Produts from './../../pages/Products'
import Todos from './../../pages/Todos'
import Comments from './../../pages/Comments'
import B4Movies from './../../pages/B4Movies'
import ThemeSetting from '../../pages/ThemeSetting'

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* Route Nesting  */}
      <Route path="products">
        <Route index element={<Produts />} />
        <Route path=":id" element={<Product />} />
        <Route path="new" element={<NewProduct />} />
      </Route>

      <Route path="smart-counter" element={<SmartCounter />} />
      <Route path="todos" element={<Todos />} />

      <Route path="advanced-layout/*" element={<AdvancedLayout />} />
      <Route path="comments" element={<Comments />} />
      <Route path="b4movies" element={<B4Movies />} />
      <Route path="theme-setting" element={<ThemeSetting />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
