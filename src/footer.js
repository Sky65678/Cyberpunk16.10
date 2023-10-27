import './footer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom'
function Footer() {
    return(
    <div className='footer-white'>
        <div className='footer-flex'>
            <div className='footer-img'>
                <div className='cyber2077-img'></div>
                <div className='cd-project-img'></div>
            </div>
            <div className='footer-white-text'>
                <p><Link to ='/Legal'>Legal</Link></p>
                <p>Политика конфиденциальности</p>
            </div>
        </div>
        <div className='footer-black'>
            <p>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
        </div>
    </div>
);
}
export default Footer;
