import { Link } from 'react-router-dom'

const Nav = () => (
  <div className='absolute top-0 left-0 p-4 mr-auto space-x-3'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/examples'>Examples</Link>
  </div>
)

export default Nav
