import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Sidebar() {
  const [{ user }] = useStateValue()

    return <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"} title='Amis'/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"} title='Groupes'/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"} title='Marketplace'/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"} title='Videos'/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"} title='Évènements'/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"} title='Souvenirs'/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"} title='Enregistrements'/>
      <SidebarRow src={"https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"} title='Pages'/>
      <SidebarRow Icon={ExpandMoreIcon}  title='Voir Plus'/>
    </div>;
}

export default Sidebar
