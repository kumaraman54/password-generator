import React,{useEffect, useState} from 'react'

const Password = () => {

  const [update,setUpdate] = useState('ubjklrx');
  const [upper,setUpper]=useState(false);
  const [number,setNumber]=useState(false);
  const [sym,setSym]=useState(false);
  const [len,setLen]=useState(8);
  

  const small="abcdefhijklmnopqrstuvwxyz";
  const large ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers="1234567890";
  const symbol="!@#$%^&*()-+";
   
  
//  const smallgen = ()=>{
//   let newstring=""
//     for(let i=0;i<6;i++){
//       newstring+=(small[Math.floor(Math.random()*small.length)])
//     }
//     return newstring
//  }
//  const largegen = ()=>{
//   let newstring=""
//     for(let i=0;i<6;i++){
//       newstring+=(large[Math.floor(Math.random()*large.length)])
//     }
//     return newstring
//  }
//  const numbergen = ()=>{
//   let newstring=""
//     for(let i=0;i<6;i++){
//       newstring+=(numbers[Math.floor(Math.random()*numbers.length)])
//     }
//     return newstring
//  }
//  const symbolgen = ()=>{
//   let newstring=""s
//     for(let i=0;i<6;i++){
//       newstring+=(symbol[Math.floor(Math.random()*symbol.length)])
//     }
//     return newstring
//  }

const generate =()=>{
  let emptystring="";

  emptystring += small;

  if(upper){
    emptystring += large;
  }
  if(number){
    emptystring +=numbers;
  }
  if(sym){
    emptystring +=symbol;
  }
  let newpass="";
  for(let i=0;i<len;i++){
    newpass += emptystring.charAt(Math.floor(Math.random()*emptystring.length));
    
  }
  setUpdate(newpass);
}

useEffect(()=>{
  generate();
},[len, upper, number, sym])

  return (
   <>
     <div className='blue-box'>
     <div className='big'>
    <input className='text' type='text' style={{color : "white"}} placeholder='jkhhfgdgh' value={update} name='text'></input>
    <button onClick={()=>{ navigator.clipboard.writeText(update)}}>COPY IT</button>
    </div>
    
    <div className='length'>
    <label htmlFor="length">Length of Password [{len}]:</label>
     <input type="range" id="length" name="length" min="8" max="50" value={len} onChange={(e)=>{setLen(e.target.value)}}/>
    
    </div>
    <div className='centre'>
    <div className='check'>
          <div className='uppercase'>
            <input type="checkbox" id="uppercase" name="Uppercase" value="Uppercase" onChange={(e)=>{setUpper(e.target.checked)}}/>
            <label htmlFor="uppercase">Uppercase</label></div>
            <div className='numbers'>
            <input type="checkbox" id="numbers" name="Numbers" value="Numbers" onChange={(e)=>{setNumber(e.target.checked)}}/>
            <label htmlFor="numbers">Numbers</label></div>
            <div className='symbols'>
            <input type="checkbox" id="symbols" name="Symbols" value="Symbols" onChange={(e)=>{setSym(e.target.checked)}}/>
            <label htmlFor="symbols">Symbols</label></div>
            </div>
    </div>
    </div>
  
   </>
  )
}

export default Password