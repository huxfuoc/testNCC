import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className='grid-container'>
        <div className='Menu'>
          <Sidebar />
        </div>
        <div className='Main'>
          <div>
            <img alt='logo' src={require('../src/assets/logo.png')} height={100} width={200} />
          </div>
          <div className='content'>
            <h4>
              Lorem ipsum dolor sit assmet?
            </h4>
            <p>
              Loáidoaisd áodaskdnk akisdhjkashd íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdjasd  jasdgjb ádhhasvd nsdb bsjdbb ạdbb jasdbn á ándbnasbd áhdbh ándbn vhjjsdf jasfbj jhasfbb badfb
              íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdjasd  jasdgjb ádhhasvd nsdb bsjdbb ạdbb jasdbn á ándbnasbd áhdbh ándbn vhjjsdf jasfbj jhasfbb badfb
              íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdjasd  jasdgjb ádhhasvd nsdb bsjdbb ạdbb jasdbn á ándbnasbd áhdbh ándbn vhjjsdf jasfbj jhasfbb badfb
            </p>
          </div>
          <div className='grid-columns-3'>
            <div class="grid-item">
              <h3>
                Lorem ipsum dolor sit amet
              </h3>
              <div className='grid2'>
                <img alt='logo' src={require('../src/assets/pic1.png')} height={100} width={70} />

                Loáidoaisd odaskdnk akisdhjkashd íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdja
                Loáidoaisd odaskdnk akisdhjkashd íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdja

              </div>
            </div>
            <div class="grid-item">
              <h3>
                Lorem ipsum dolor sit amet
              </h3>
              <div className='grid2'>
                <img alt='logo' src={require('../src/assets/pic2.png')} height={100} width={70} />

                Loáidoaisd odaskdnk akisdhjkashd íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdja
                Loáidoaisd odaskdnk akisdhjkashd íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdja

              </div>
            </div>
            <div class="grid-item">
              <h3>
                Lorem ipsum dolor sit amet
              </h3>
              <div className='grid2'>
                <img alt='logo' src={require('../src/assets/pic3.png')} height={100} width={70} />

                Loáidoaisd odaskdnk akisdhjkashd íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdja
                Loáidoaisd odaskdnk akisdhjkashd íahdhas hádhjasbd jasdhjhasjd hádhjasbd jasdja

              </div>
            </div>
          </div>
        </div>
        <div className='Footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
