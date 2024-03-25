import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import React, {useContext} from 'react'
import { AppContext } from '@/context/AppContext'
import { IconButton } from '@mui/material'
import Styles from '../../app/globals.css'

const ToggleTheme = () => {
    const {theme, toggle} = useContext(AppContext)

    return(
        <div>
            <IconButton onClick={toggle} className={Styles.toggle}>
                {theme === "dark" ? <LightModeIcon style={{color:"white"}}/> : <DarkModeIcon style={{color:"black"}}/>}
            </IconButton>
        </div>
    );
};

export default ToggleTheme