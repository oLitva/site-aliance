import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import MainTitle from './components/MainTitle'
import MainInfo1 from './components/MainInfo1'
import MainServices from './components/MainServices'
import AboutWork from './components/AboutWork';
import ProfitWork from './components/ProfitWork';
import ImplementedProject from './components/ImplementedProject';
import ApplicationForm from './components/ApplicationForm';

function App() {

  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   fetch('/api')
  //     .then(response => response.json())
  //     .then(response => setData(response.message))
  // }, [])

  return (
    <>
      <MainTitle />
      <MainInfo1 />
      <MainServices />
      <AboutWork />
      <ProfitWork />
      <ImplementedProject />
      <ApplicationForm />
    </>
  );
}

export default App;
