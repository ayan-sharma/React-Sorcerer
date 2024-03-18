import { useState } from 'react';
import './App.css';
import MyEditor from './components/MyEditor';
import StyleShower from './components/style-shower';
import Info from './components/Info';
import Title from './components/Title';

function App() {
  const [styles, setStyles] = useState({
    heading: false,
    bold: false,
    font: false,
    underline: false,
    highlight: false,
  })
  return (
    <div className="flex flex-col w-full p-[30px]">
      <div className='flex justify-center items-center w-full relative'>
        <Title titleValue={'Demo editor'} />
       
      </div>
      <div>
        <StyleShower styles={styles} />
      </div>
      <div className='border-[2px] border-grey mt-[50px] min-h-[400px]'>
        <MyEditor styles={styles} setStyles={setStyles} />
      </div>
      <Info />
    </div>
  );
}

export default App;
