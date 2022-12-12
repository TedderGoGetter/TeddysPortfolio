import './Header.scss'

const Header = () => {

  return (
    <div className="header-container">
        <a className="live-shows links" href="/" target="_blank"><h3>Live Shows</h3></a>
        <a className="visuals links" href="/" target="_blank"><h3>Visuals</h3></a>
        <a className="store links" href="/" target="_blank"><h3>Store</h3></a>
        <a className="fun-stuff links" href="/" target="_blank"><h3>Fun Stuff</h3></a>
        <a className="contact links" href="/" target="_blank"><h3>Get In Touch</h3></a>
    </div>
  )
}

export default Header