import { Link } from 'react-router-dom'
import Icon from '../icon/Icon'
function Header() {
  const navs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: 'about' },
    { label: 'Contact', path: 'contact' },
    { label: 'Products', path: 'products' },
    { label: 'Redux tollkit', path: 'smart-counter' },
    { label: 'Todos', path: 'todos' },
    { label: 'Advanced Layout', path: 'advanced-layout/movies' },
    { label: 'Comments', path: 'comments' },
    { label: 'B4movies', path: 'b4movies' },
    { label: 'Theme', path: 'theme-setting' },
  ]
  return (
    <div className="flex space-x-2 items-center border-b-2 border-b-gray-300 pb-2">
      <div className="uppercase text-green-500">React+Vite</div>
      <Icon id="pencil-alt" size={14} className="fill-green-400" />
      <div className="flex-auto flex space-x-2 items-center justify-end">
        {navs.map((nav, index) => (
          <Link
            key={index}
            className="px-4 py-1 rounded uppercase hover:opacity-75 cursor-pointer bg-gray-100"
            to={nav.path}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
