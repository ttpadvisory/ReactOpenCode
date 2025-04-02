/*
 * Using Un-Controlled Inputs with MUI (But can be any inputs)
 * In React.
 *
 * If you have a lot of Renders going on you will notice Lag on your Text Inputs
 * When you save them to state. The Answer is to save them in refs and commit to State
 * Only when you want to Submit data or save do a database etc.
 *
 * A Couple of points are inputRef={ref} for MUI and ref={} for standard <input  

import React, { useState, useRef} from 'react';

function myUnControlledTest() {
  const [inputVal, setInputVal] = useState("Hello World");
  const [textFieldVal, setTextFieldVal] = useState(null);

  let myTextFieldRef = useRef(null);
  let myInputRef = useRef(null);


  const  updateData = () => {
      // Access the data in our input Refs with inputRef.current.value
      // Only store in State Once we Submit - or you need to access the data.

      setInputVal(myInputRef?.current?.value);   
      setTextFieldVal(myTextRef?.current?.value);
  }

  return (
      <TextField inputRef={myTextFieldRef} defaultValue={inputVal} />
      <input ref={myInputRef} />
      <button onClick={updateData} >Update Form</button>
  )
}
