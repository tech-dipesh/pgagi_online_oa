const [state, setState]=useState("");
const [list, setList]=useState([]);

return (
  <div>
  <input type="text" value={state}  onChange={(e)=>setState(e.target.value)}/>
  <button onClick=(()=>{
    if(state==="") return;
    setList((prev)=>([...prev, state]));
    setState("")
  })>Submit</button>

    {list.map((val, i)=>(
      <div key={i}>Todo: {val}</div>
    ))}
  </div>
)
