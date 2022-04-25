import sky from 'sky.svg';
import m1 from 'm1.svg';
import m2 from 'm2.svg';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
function App(){

    return(
        <div>
            <Parallax pages={4}>
                <ParallaxLayer>
                    <img src='sky.svg'></img>
                </ParallaxLayer>
                    <img src='m1.svg'></img>
                <ParallaxLayer>
                    
                </ParallaxLayer>


            </Parallax>
        </div>
    );

}
export default App;