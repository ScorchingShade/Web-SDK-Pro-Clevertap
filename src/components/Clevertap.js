import React, { useEffect, useState } from 'react'
import clevertap from 'clevertap-web-sdk'
import jQuery from 'jquery'
import '.././App.css'

clevertap.privacy.push({optOut: false}) // Set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: true})  // Set the flag to true, if the user agrees to share their IP data
clevertap.init('6K9-955-ZZ6Z') // Replace with values applicable to you. Refer below





function Clevertap() {
const [uname,setUname]=useState("");
const [upass,setUpass]=useState("");
const [email,setEmail]=useState("");
const [identity,setIdentity]=useState("");
const [uevent,setUevent]=useState("");
const [uprop,setUprop]=useState("");
const [upropval,setUpropval]=useState(""); //


useEffect(() => {
    // Update the document title using the browser API

  });

const handleClick=(e)=>{
    e.preventDefault();
    var wrapper = window.parent.document.getElementById('wizParDiv0');
    console.log(wrapper);
    wrapper.remove();


    

}


const eventHandler =(e)=>{
    e.preventDefault();

    clevertap.notifications.push({
        "titleText":'Would you like to receive Push Notifications?',
        "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText":'Sign me up!',
        "rejectButtonText":'No thanks',
        "okButtonColor":'#f28046',
        "hidePoweredByCT":'true',
        "background-color":'red'
    });

 
    clevertap.event.push(uevent, {
        uprop: upropval,
    });
    

    
}
clevertap.notificationCallback = function(msg){
    //raise the notification viewed and clicked events in the callback
    clevertap.raiseNotificationViewed();
    console.log(JSON.stringify(msg));//your custom rendering implementation here
    var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
    $button.click(function(){
       clevertap.raiseNotificationClicked();
    });
};

clevertap.notificationCallback = function(msg){
    //raise the notification viewed and clicked events in the callback
    clevertap.raiseNotificationViewed();
    console.log(JSON.stringify(msg));//your custom rendering implementation here
    var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
    $button.click(function(){
       clevertap.raiseNotificationClicked();
    });
};

const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Name "+uname+"\nid "+identity)
    clevertap.onUserLogin.push({
    
        "Site": {
            "Name": uname,                  // String
            "Identity": identity,                    // String or number
            "Email": email, // String               // Email address of the user
            "Phone": "+9970000001000",                 // Phone (with the country code)
            "Gender": "M",                           // Can be either M or F
            "DOB": new Date(), // Date of Birth. Javascript Date object
            "Photo": ' ',    // URL to the Image
         
         // optional fields. controls whether the user will be sent email, push etc.
            "MSG-email": false,                      // Disable email notifications
            "MSG-push": true,                        // Enable push notifications
            "MSG-sms": true,                          // Enable sms notifications
            "MSG-whatsapp": true,                    // Enable whatsapp notifications
          }
    
    })

    setTimeout(()=>{
        console.log("Here!")
        clevertap.notifications.push({
            "titleText":'Would you like to receive Push Notifications?',
            "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
            "okButtonText":'Sign me up!',
            "rejectButtonText":'No thanks',
            "okButtonColor":'#f28046'});
            console.log("Now here")
    },5000)

   
}
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" id="uname" placeholder="Username" onChange={(e)=>setUname(e.target.value)}></input><br>
                </br>
                <input type="text" name="email" id="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                <input type="password" name="password" id="upass" placeholder="password" onChange={(e)=>setUpass(e.target.value)}></input><br></br>
                <input type="identity" name="identity" id="identity" placeholder="identity" onChange={(e)=>setIdentity(e.target.value)}></input><br></br>
                <input type="submit" value="submit"></input>
            </form>
            <br></br>
            <form onSubmit={eventHandler}>
                <input type="text" name="eventName" id="uevent" placeholder="event name" onChange={(e)=>setUevent(e.target.value)}></input><br></br>
                <input type="text" name="eventProp" id="uprop" placeholder="event property Name" onChange={(e)=>setUprop(e.target.value)}></input><br></br>
                <input type="text" name="eventProp" id="upropval" placeholder="event property value" onChange={(e)=>setUpropval(e.target.value)}></input><br></br>
                <input type="submit" value="submit"></input>
            </form>

            <div className="btn" id="btn" onClick={handleClick}>CLOSE</div>
        </div>
    )
}

export default Clevertap
