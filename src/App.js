import { useContext, useEffect } from 'react';
import './App.css';
import DisplayImg from './components/DisplayImg';
import Navbar from './components/Navbar';
import { MainContext } from './context/MainContext';

const App = () => {
  const { getUserContent, getUserContentAll, img_index } = useContext(MainContext)
  const [imgIndex, setImgIndex] = img_index

  const changeImgIndex = (val) => {
    if(val > 0){
      setImgIndex(val)
    }  
  }

  const scroll = () => {
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        changeImgIndex(imgIndex + 6)
      }
    }
  }

  useEffect(() => {
    getUserContent()
    getUserContentAll()
    scroll()
  }, [imgIndex])

  return (
    <>
      <Navbar />
      <DisplayImg />
    </>
  );
}

export default App;
