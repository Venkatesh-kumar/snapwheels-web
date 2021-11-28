import { Button } from "react-materialize"
const geopermission= (context) =>{
    const reload = () =>{
       context.history.push("/")
    }
    return(
        <div>
            <section className="container ">
                <h3 className="center orange" style={{marginTop:100,marginBottom:100}}>Blocked Location Access</h3>
                <h5 style={{marginTop:50,marginBottom:50}}>Dear user, Snapwheels website uses user location to show nearby bikes.</h5>
                <h5 style={{marginTop:50,marginBottom:50}}>Without user location website cannot operate. We request you to grant access to proceed further. Please visit your browser settings and allow location permission.</h5>
                <h5 style={{marginTop:50,marginBottom:50}}>You can also download our mobile application if you are not comfortable granting access in web browser.</h5>
                <Button  onClick={reload} style={{cursor:"pointer",marginBottom:100}}>I have granted location access!</Button>
               
            </section>
        </div>
    )
}

export default geopermission