import React, {useEffect} from "react";
import Button from "../button/button";



const Header = () => {


  const tg = window.Telegram.WebApp;

  useEffect(() => {
      tg.ready()
    },[])
  
    const onClose = () => {
      tg.close()
    }

  return (  


      <div>
          <Button onClick={onClose}>Закрытьь</Button>
          <span className={'username'}>
              {tg.initDataUnsafe?.user}
          </span>
      </div>
  );
}
 
export default Header;