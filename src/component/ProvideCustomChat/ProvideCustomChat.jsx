import { FacebookProvider, CustomChat } from 'react-facebook';
 
 const ProvideCustomChat = () => {
    return (
        <FacebookProvider appId="838663378005240" chatSupport>
        <CustomChat pageId="100973205345215" minimized="true"/>
      </FacebookProvider>  
    );
 };
 
 export default ProvideCustomChat;