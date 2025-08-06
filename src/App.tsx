import { Ban, Bell, CheckCheck, Info } from 'lucide-react';
import './App.css'
import Alert from './Components/UI/Alert/Alert'

function App() {
  

  return (
    
      <div style={{margin: "2rem"}}>

      <div>
        <Alert type={"alert-default"} icon= {<Bell size={20} />} title={"Upgrade your plan"} >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nobis aliquid explicabo, quae 
          <a href="/">maiores</a> 
          architecto neque dolore cupiditate quos ad.
        </p>
        </Alert>
      </div>

      <div>
        <Alert type={"alert-info"} icon= {<Info size={20} />} title={"Note"} 
        desc= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nobis aliquid explicabo, quae maiores architecto neque dolore cupiditate quos ad."/>
      </div>

      <div>
        <Alert type={"alert-success"} icon= {<CheckCheck size={20} />} title={"Your order has been processed"} 
        desc= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nobis aliquid explicabo, quae maiores architecto neque dolore cupiditate quos ad."/>
      </div>

      <div>
        <Alert type={"alert-error"} icon= {<Ban size={20} />} title={"Something Went Wrong"} 
        desc= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nobis aliquid explicabo, quae maiores architecto neque dolore cupiditate quos ad."/>
      </div>

      <div>
        <Alert type={"alert-warning"} icon= {<Ban size={20} />} title={"Tips & Tricks"} 
        desc= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nobis aliquid explicabo, quae maiores architecto neque dolore cupiditate quos ad."/>
      </div>

      

      </div>
  );
};

export default App;
