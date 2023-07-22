import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Get_started from './components/get_started';
import Payment from './components/payment';
import Scan from './components/scan';
import People from './components/people';
import Comments from './components/comments';
import Service from './components/service';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Get_started/>
      <Payment/>
      <Scan/>
      <People/>
      <Comments/>
      <Service/>
      <Footer/>
    </>
  );
}

export default App;
