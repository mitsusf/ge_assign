import React, { useEffect } from "react";
import './Home.css';
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import AlertMsg from '../../Components/AlertMsg/AlertMsg';
import { useStateValue } from "../../StateProvider";
import { v4 as uuid } from "uuid";

function Home() {
   const [{ alerts }, dispatch] = useStateValue();

   useEffect(() => {}, []);

   const firealert = (type, message) => {
    // Put on task queue
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 0);
    }).then(function () {
      dispatch({
        type: "ADD_ALERTS",
        item: {
          id: uuid(),
          message: message,
          type: type,
        },
      });
    }); 
   };

   return (
     <div className="home">
       <div className="home__alert">
         {alerts?.length === 0 ? (
           <div></div>
         ) : (
           <div className="">
             {alerts?.map((item) => (
               <AlertMsg
                 id={item.id}
                 message={item.message}
                 type={item.type}
               />
             ))}
           </div>
         )}
       </div>

       <div className="home__title">
         <Typography variant="h5"> Dynamic Placement </Typography>
         <p className="home__text">
           <strong>Explanation: </strong>Event trigger to generate a different type of alert.  In this case, the event is a button click (Async with time 0 sec)
         </p>
       </div>
       <div className="home__control">
         <Button
           variant="outlined"
           onClick={() => firealert("error", "Please fix the error.")}
         >
           Error
         </Button>
         <Button
           variant="outlined"
           onClick={() => firealert("warning", "Some warning....... ")}
         >
           Warning
         </Button>
         <Button
           variant="outlined"
           onClick={() => firealert("success", "Welcome home!")}
         >
           Success
         </Button>
         <Button
           variant="outlined"
           onClick={() => firealert("info", "FYI: This is some information.")}
         >
           Info
         </Button>
       </div>

       <hr
         style={{
           color: "blue",
           backgroundColor: "blue",
           height: 2,
           width: 400,
           margin: 10,
         }}
       />

       <div className="home__alert">
         <AlertMsg message="Statically generated. No state" type="warning" />
         <AlertMsg />
       </div>
       <div className="home__title">
         <Typography variant="h5"> Static Stateless Alert</Typography>
         <p className="home__text">
           <strong>Explanation: </strong> Alert component which takes type props
           (warning error info success), and message. If type is unspecified,
           it'll default to an 'error' type.
         </p>
       </div>
     </div>
   );
}

export default Home
