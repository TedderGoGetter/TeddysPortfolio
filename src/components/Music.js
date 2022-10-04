import './Music.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



const Music = () => {
  return (
    <div className='music-container'>
        <Parallax className='parallax' pages={3}>
            <ParallaxLayer
                offset={0}
                factor={2}
                speed={1}
                style={{
                    backgroundColor: 'black',
                    backgroundSize: 'cover',    
                }}/>

            <ParallaxLayer speed={1}>
                <h2 className='title'>Teddy Robinson</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.5}>
                <h2 className='title'>Is the shit</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5}>
                <h2 className='title'>frfr</h2>
            </ParallaxLayer>

        </Parallax>

    </div>
  )
}

export default Music