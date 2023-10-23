import './header.css';
import logo from './img/Layer 2.png'
import logo1 from './img/YouTube.png'
import logo2 from './img/vk logo.png'
import logo3 from './img/facebook-rect logo.png'
import logo4 from './img/twitter-square logo.png'
import logo5 from './img/twitch logo.png'
import logo6 from './img/instagram-square logo.png'


function Header() {
    return(
    <div className='header'>
    <div className='header-block'>
        <div className='logo-header'>
             <img src={logo} alt=""/>
        </div>
        <div className='soc-icon'>
            <img src={logo1}alt=""/>
            <img src={logo2} alt=""/>
            <img src={logo3} alt=""/>
            <img src={logo4} alt=""/>
            <img src={logo5} alt=""/>
            <img src={logo6} alt=""/>
        </div>
    </div>
    </div>
);
}
export default Header;