import 'react-router-dom';  
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './LandingPage/Landing';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Sidebar/Sidebar';
import ProfilePage from './Profile/Profile';
import Contact from './Contact/Contact';
import Expolicy from './Expolicy/Expolicy';
import Newpol from './NewPol/Newpol';
import Renpol from './renpol/Renpol';
import Tester from './test/test';
import CardForm from './Payment/Payment';
import Ps from './paymentselect/Ps';
import Upi from './Upi/Upi';
import Removepage from './removepay/Removepage';
import Netb from './Netbank/Netb';
import UserOptions from './signuplogin/FormContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import Admindash from './AdminDash/Admindash';


function App() {

  return (

    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<UserOptions/>}/>
      <Route path='/dash' element={<Dashboard />}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/side' element={<Sidebar/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/expolicy' element={<Expolicy/>}/>
      <Route path='/newpolicy' element={<Newpol/>}/>
      <Route path='/renewpolicy' element={<Renpol/>}/>
      <Route path='/payment' element={<Ps/>}/>
      <Route path='/pay' element={<CardForm/>}/>
      <Route path='/test' element={<Tester/>}/>
      <Route path='/upi' element={<Upi/>}/>
      <Route path='/remove' element={<Removepage/>}/>
      <Route path='/netbanking' element={<Netb/>}/>
      <Route path='/admin' element={<Admindash/>}/>


  
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
