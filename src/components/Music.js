import './Music.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const baseScrollSpeed = 0.5

const Music = () => {
  return (
    <div className='music-container'>
        <Parallax className='parallax' pages={6}>
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
                <h2 className='title'>Good as Gold</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5}>
                <h2 className='title'>Tokyo Garfunkel</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0.5}>
                <h2 className='title'>Sobber Lies</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.5}>
                <h2 className='title'>Wet Feet</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={5} speed={0.5}>
                <h2 className='title'>Stream My Music</h2>
            </ParallaxLayer>

        </Parallax>

    </div>
  )
}

export default Music