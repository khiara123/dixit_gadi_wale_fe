import { useEffect, useState } from "react";
import storageService from "../services/storageService";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Loader from "./Loader";

const routeAuthenticator = (BaseComponent) => {
    return function ValidatorComponent(props) {
        const navigate  = useNavigate();
        const [loadChild, setLoadChild] = useState(false);
      const userVerfication = async () => {
        const user = await authService.verifyUser();
        if(user.status === 401) {
          navigate('/error');
          return;
        }
        if(user.message === 'success') {
          setLoadChild(true);
          return user;
        }
      }
        
      useEffect(() => {
         if(!storageService.getItem('token')) {
            navigate('/error');
         } else {
             const user = userVerfication();
            if(!user) {
                navigate('/error');
            }
         }
      }, [navigate]);

      if(loadChild) {
        return (
          <BaseComponent {...props} enhancedProp="someValue" />
        );
      }
      return (
        <Loader isLoading={true}/>
      );
    };
   };

export default routeAuthenticator