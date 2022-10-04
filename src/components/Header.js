import './Header.scss'

const Header = () => {

  return (
    <div className="header-container">
        <a className="selected" href="/" target="_blank"><h3>Music</h3></a>
        <div className="spacemaker"></div>
        <a className="music links" href="/" target="_blank"><h3>Music</h3></a>
        <a className="fun-stuff links" href="/" target="_blank"><h3>Fun Stuff</h3></a>
        <a className="contact links" href="/" target="_blank"><h3>Get In Touch</h3></a>
        <div className="icon1 icons"></div>
        <div className="icon2 icons"></div>
    </div>
  )
}

export default Header