import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './footer';
import Legal from './Legal';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <div className='Header'>
            <Header></Header>
          <div className='Button-header'>
            <div className='Button-header-text'><h2>Доступно на всех платформах </h2>
            <button className='button' id='button-header'>Узнать больше</button></div>
          </div>
        </div>          
      </header>
     <body> 
            <div className='Under-header-text'>
            <h2>Найт-Сити изменит тебя навсегда!</h2>
            <p className='Under-header-text-p'><span>Cyberpunk 2077</span>— приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
            </div>
            <div className='Under-header-img'>
            <div className='small-photo'>
              <div className='Under-header-img-597'></div>
              <div className='Under-header-img-598'></div>
            </div>
              <div className='large-photo'>
                <div className='Under-header-img-599'></div>
            </div>
            </div>
       <div className='Promotion'>
        <div className='Promotion-Text'>
          <h2 id='h2'>Играй и выигрывай!</h2>
          <p>Играй в <span>Cyberpunk 2077</span>  и получи возможность выиграть консоль <span>Xbox Series X</span>  или <span>Sony PlayStation 5!</span>  Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
        </div>
      <div className='Form'>
        
        <div class="contact-form">
            <div class="form-field">
              <input type="text" id="name" name="name" required  placeholder='Как тебя зовут?'></input>
            </div>
            <div class="form-field">
              <input type="email" id="email" name="email" required placeholder='Твой е-mail'></input>
            </div>
            <div class="attachment-block">
              <label for="screenshot">Прикрепить скриншот</label>
              <input type="file" id="screenshot" name="screenshot"></input>
            </div>
            <button type="submit">Отправить</button>
            <div class="checkbox">
              <input type="checkbox" id="click"></input>
                <label for="click" class="text"> Согласен на обработку персональных данных </label>
            </div>
          </div> 
          <div className='form-img'>
            <div className='Xbox'></div>
            <div className='Playstation'></div>
        </div>
        </div>
      </div> 
      <div className='Grid-monitor'>
              <div className='Grid-img'>
                <div className='monitor'></div>
                <div className='Grid-img-monitor-img'>
                <div className='hp'></div>
                <div className='x'></div>
                <div className='Cyber'></div>
                </div>
              </div>
              <div className='Grid-text'>
                  <h2>Полное погружение вместе с HP</h2>
                  <p>Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!</p>
                  <p><div className='point'></div>Яркие насыщенные цвета</p>
                  <p><div className='point1'></div>Кристальная четкость изображения</p>
                  <p><div className='point2'></div>Быстрые движения и плавный геймплей</p>
                  <button type='submit'>Подробнее</button>
              </div>
            </div>
        <div className='sale'>
          <div className='sale-img'>
              <div className='Discs'></div>
          </div>
          <div className='sale-text'>
              <h2>Купить игру Cyberpunk 2077</h2>
              <p><span>В комплект входит:</span></p>
              <p><div className='disk-img'></div>Футляр с игровыми дисками</p>
              <p><div className='disk1-img'></div>Футляр с кодом для загрузки игры и дисками (pc)</p>
              <p><div className='disk2-img'></div>Справочник с информацией об игровом мире</p>
              <p><span>Выберите платформу:</span></p>
              <div className='Flex-platform'>
                <div className='Flex-platform-1line'>
                  <div className='pc-img'></div>
                  <div className='stadia-img'></div>
                </div>
                <div className='Flex-platform-2line'>
                  <div className='xbox-img'></div>
                  <div className='playstation-mini-img'></div>
                </div>
              </div>
          </div>
        </div>
  </body> 
    <footer>
      <Footer></Footer>
      <Routes>
        <Route path={'Legal'} element={<Legal></Legal>}></Route>
      </Routes>
    </footer>
    </div></BrowserRouter>
  );
  
}

export default App;
