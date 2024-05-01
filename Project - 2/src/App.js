import "./App.css";
import Navbar from "./Components/Navbar";
import FormText from "./Components/FormText";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [nameMode, setNameMode] = useState("Dark Mode");
  const tMode =()=>{
    if(mode === "light"){
      setMode("dark");
      setNameMode("Light Mode");
      document.body.style.backgroundColor = '#040d12'
    }else{
      setMode("light");
      setNameMode("Dark Mode");
      document.body.style.backgroundColor = '#ffffff'
    }
  }
  return (
    //"<> </>" this is a jsx fragment to include multiple tags in app.js. Otherwise there was only one div of classname app where all the
    //props, propTypes, defaultProps

    <>
      <Navbar nav_title = "TextUtils" home = "Home" about = "About" nameMode={nameMode} mode={mode} toggleMode = {tMode}/>
      <div className="container">
      <FormText mode={mode} textAreaTitle = "Enter Text to Analyze"/>
      </div>
      <Navbar nav_title= "" footerText = "Yashraj Joshi" footMargin = "mt-5" visibility = "invisible" copyright = "All Copyright Reserved ©" nameMode={nameMode} mode={mode} toggleMode = {tMode}/>
    </>
  );
}

export default App;
