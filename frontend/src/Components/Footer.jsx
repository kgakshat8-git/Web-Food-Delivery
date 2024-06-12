import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <Link  to='/' className="nav-link nav-item px-2 text-muted">Home</Link>
      <Link  to='/' className="nav-link px-2 text-muted">Features</Link>
      <Link  to='/' className="nav-link px-2 text-muted">Pricing</Link>
      <Link  to='/' className="nav-link px-2 text-muted">FAQs</Link>
      <Link  to='/' className="nav-link px-2 text-muted">About</Link>
    </ul>
    <p className="text-center text-muted">© 2024 Eat India, Inc</p>
  </footer>
</div>
    </div>
  )
}
export default Footer

