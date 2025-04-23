import Addform from './components/Addform';

import Consultacat from './components/Addcon_cat';
import Consultaent from './components/Addcon_ent';
import Consultapro from './components/Addcon_pro';
import Consultausu from './components/Addcon_usu';

import Editarcat from './components/Addedit_cat';
import Editarent from './components/Addedit_ent';
import Editarpro from './components/Addedit_pro';
import Editarusu from './components/Addedit_usu';

import Registrocat from './components/Addreg_cat';
import Registroent from './components/Addreg_ent';
import Registropro from './components/Addreg_pro';
import Registrousu from './components/Addreg_usu';

import Login from './components/Login';

import { BrowserRouter, Route,Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/log' element={<Login />} />
        <Route path='/bie' element={<Addform />} />

        <Route path='/concat' element={<Consultacat />} />
        <Route path='/conent' element={<Consultaent />} />
        <Route path='/conpro' element={<Consultapro/>} />
        <Route path='/conusu' element={<Consultausu/>} />

        <Route path='/edicat' element={<Editarcat />} />
        <Route path='/edient' element={<Editarent />} />
        <Route path='/edipro' element={<Editarpro />} />
        <Route path='/ediusu' element={<Editarusu />} />


        <Route path='/regcat' element={<Registrocat />} />
        <Route path='/regent' element={<Registroent />} />
        <Route path='/refpro' element={<Registropro />} />
        <Route path='/regusu' element={<Registrousu />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;