import Axios from "axios"
import {useEffect,useState} from "react"
import PriceContainer from "../../Components/PriceContainer";
import Modal from "react-modal";
import Bangalore from "../../Images/Bangalore.png"

const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
        width:'80%',
      height:'80%'
    },
};



const Offers = () =>{

    const [priceDB, setpriceDB] = useState([])
    const [citySelectModal, setcitySelectModal] = useState(false)
    const [citySelected, setcitySelected] = useState("")

    useEffect(() => {
        setTimeout(() => {
            if(citySelected === "")
            {
                setcitySelectModal(true);
            }
        }, 1000);
    })

    useEffect(() => {
        let pricelist = localStorage.getItem(`PriceDB${citySelected}`);
        console.log(`PriceDB${citySelected}`)
        if(pricelist === null || pricelist.length === 0)
        {
             if(citySelected !== "")
            {
                Axios.post("/pricelist/getBikes",{city:citySelected})
                .then((response)=>{
                    console.log(response.data)
                    localStorage.setItem(`PriceDB${citySelected}`,JSON.stringify(response.data))
                    setpriceDB(response.data)
                })
                .catch((err)=>console.log(err))  
            }
        }
        else
        {
            console.log("local")
            setpriceDB(JSON.parse(pricelist))
        }
    }, [citySelected])

    function closeCitySelectModal(){
        setcitySelectModal(false);
    }

    
 
    
    return(
        <div>
            <Modal
                isOpen={citySelectModal}
                onRequestClose={closeCitySelectModal}
                style={modalStyle}
                contentLabel="City select modal"
            >
                <h5 style={{marginBottom:50}}>Select City :</h5>
                <div className="row">
                    <a onClick={()=>{setcitySelected("Bangalore");setcitySelectModal(false)}} className="col s6 m3 l2 cityBlock center">
                        <img src={Bangalore} width="100" height="100"></img>
                        <h5 style={{color:"black"}}>Bangalore</h5>
                    </a>
                </div>
                <a onClick={closeCitySelectModal}><p className="right">Close</p></a>
            </Modal>
            <section >
               <div className="row" style={{margin:50}}>
                {priceDB.length !== 0?priceDB.map((item)=>{
                        return <div className="col s12 m6 l4"><PriceContainer data={item}/></div>
                    }):null}
               </div>
            </section>
        </div>
    )
}

export default Offers;