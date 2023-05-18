import React, {useEffect} from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";



const Header = () => {


  const {user, onClose} = useTelegram();

  console.log(user)


  return (  


      <div>
          <Button onClick={onClose}>Закрытьь</Button>
          <span className={'username'}>
              {user?.username}
          </span>
      </div>
  );
}
 
export default Header;