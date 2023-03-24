import './Content.scss'

const Content = () => {
  const mainLogo = new URL('../images/teddybanner.png', import.meta.url) 
  const teddFace = new URL('../images/teddface.png', import.meta.url) 

  return (
    <div className='content-container'>
      <img src={mainLogo} alt="" className='main-logo'></img>

      <h3 className="main-text">Just by being here you've unlocked some secret sauce: <br></br>
      My next EP is called "Teddy, I love you, come back to earth" <br></br><br></br>
      It's currently 40% finished.<br></br>
      It's some of the best and least hiphoppy stuff I've made.<br></br>
      <br></br>
      Big love,<br></br>
      <br></br>
      Teddy
      <br></br>
      <br></br>
      PS: I'm writing a music promotion guide, you can follow it in real-time <a href="https://docs.google.com/document/d/1igfoVMDksUTgILmNIQC1ZR9kXSlajUhxaR2KKfyUs9Q/edit" target="_blank" rel="noreferrer">here</a>
      </h3>
      <img src={teddFace} alt="" className='teddface'></img>
      <h5>
        Bio:
        Teddy Robinson is a recording artist from The Netherlands.<br></br>
        He is known both for his YouTube videos and classic mixtapes such as Tokyo Garfunkel.<br></br>
        He loves peanut butter.<br></br>
      </h5>
    </div>
  )
}

export default Content