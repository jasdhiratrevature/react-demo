import {useState} from 'react';

function Content() {
  const [name,setName]=useState('Jasdhir');
    const handleNameChange = () => {
        const names=['Ravi','Ramesh','Saurabh'];
        const int=Math.floor(Math.random()*3);
        setName(names[int]);
      }
      let countA=0;

      const incrementCountA=()=>{
        countA++;
      }

      const [countB,setCountB]=useState(0);
      const incrementCountB=()=>{
        setCountB(countB+1);
      }
      const decrementCountB=()=>{
        setCountB(countB-1);
      }
     
  return (
    <main>
        <p>
            Hello {name} !
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        Count A : {countA}
        <button onClick={incrementCountA}>Count A</button>
        Count B : {countB}
        <button onClick={incrementCountB}>Increase Count B</button>
        <button onClick={decrementCountB}>Decrease Count B</button>
        </main>
  )
}

export default Content
