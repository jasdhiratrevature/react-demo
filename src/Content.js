
function Content() {
    const handleNameChange = () => {
        const names=['Ravi','Ramesh','Saurabh'];
        const int=Math.floor(Math.random()*3);
        return names[int];
      }
      const handleClick=()=>{
        alert("You Clicked it !")
      }
      const handleClick2 =(name)=>{
        alert(`${name} Clicked`)
      }
  return (
    <main>
        <p>
            Hello {handleNameChange()} !
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={()=>handleClick2('Jasdhir')}>Click Again</button>
    </main>
  )
}

export default Content
