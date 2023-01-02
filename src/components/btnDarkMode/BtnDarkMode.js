import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'
import './style.css'
import React from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import {DetectDarkMode} from '../../utils/detectDarkMode'


const BtnDarkMode = () => {

  

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', DetectDarkMode()); 

    // const [ darkMode, setDarkMode ] = React.useState(true)

    React.useEffect(()=> {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            // btnRef.current.classList.add('dark-mode-btn--active')
        }
        else {
            document.body.classList.remove('dark')
            // btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode])

    React.useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
             const newColorScheme = event.matches ? "dark" : "light";
             setDarkMode(newColorScheme)
        });
    },[setDarkMode])

    const ToggleDarkMode = ()=>{
        setDarkMode((prev) => prev === 'light' ? 'dark' : 'light')
    }

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active'

    return (

     <button  className={darkMode === 'dark' ? btnActive : btnNormal} onClick={ToggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button> 
 

    );
}

export default BtnDarkMode;