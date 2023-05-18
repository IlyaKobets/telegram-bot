import React, {useEffect} from "react";
import Button from "../button/button";

const tg = window.Telegram.WebApp;

const Header = () => {


  

  useEffect(() => {
      tg.ready()
    },[])
  
    const onClose = () => {
      tg.close()
    }

  return (  


      <div>
          <Button onClick={onClose}>Закрыть</Button>
          <span className={'username'}>
              {tg.initDataUnsafe?.user?.userName}
          </span>
      </div>
  );
}
 
export default Header;