import { useEffect,useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.css"


const PriceContainer = (props) =>{

    const [bikeData, setbikeData] = useState({})
    const [imagePath, setimagePath] = useState('')
    useEffect(() => { 
        setbikeData(props.data)
        switch (props.data.bikeNo) {
            case 1:
                setimagePath( require('../../Images/Honda_Dio.png'));
            break;
            case 2:
                    setimagePath( require('../../Images/Activa_3g.png'));
            break;
            case 3:
                setimagePath( require('../../Images/Activa_6g.png'));
            break;
            case 4:
                    setimagePath( require('../../Images/Apache_rtr_180.png'));
            break;
            case 5:
                setimagePath( require('../../Images/Aprilia_125.png'));
            break;
            case 6:
                    setimagePath( require('../../Images/Aprilia_150.png'));
            break;
            case 7:
                setimagePath( require('../../Images/Ather.png'));
            break;
            case 8:
                    setimagePath( require('../../Images/Aviator.png'));
            break;
            case 9:
                setimagePath( require('../../Images/Bajaj_pulsar.png'));
            break;
            case 10:
                    setimagePath( require('../../Images/Classic_350.png'));
            break;
            case 11:
                setimagePath( require('../../Images/Continental_gt_650.png'));
            break;
            case 12:
                    setimagePath( require('../../Images/Duke_200.png'));
            break;
            case 13:
                    setimagePath( require('../../Images/Epluto.png'));
            break;
            case 14:
                setimagePath( require('../../Images/Fascino.png'));
            break;
            case 15:
                    setimagePath( require('../../Images/FZ_version_1.png'));
            break;
            case 16:
                    setimagePath( require('../../Images/Himalayan_BS6.png'));
            break;
            case 17:
                setimagePath( require('../../Images/Honda_activa_5g.png'));
            break;
            case 18:
                    setimagePath( require('../../Images/Honda_cbr.png'));
            break;
            case 19:
                    setimagePath( require('../../Images/Honda_hornet.png'));
            break;
            case 20:
                setimagePath( require('../../Images/Interceptor_650.png'));
            break;
            case 21:
                    setimagePath( require('../../Images/Jawa.png'));
            break;
            case 22:
                setimagePath( require('../../Images/Mastreo.png'));
            break;
            case 23:
                    setimagePath( require('../../Images/Yamaha_mt.png'));
            break;
            case 24:
                setimagePath( require('../../Images/Ntorq.png'));
            break;
            case 25:
                    setimagePath( require('../../Images/RE_desert_storm.png'));
            break;
            case 26:
                setimagePath( require('../../Images/RE_stealth_black.png'));
            break;
            case 27:
                    setimagePath( require('../../Images/Thunderbird.png'));
            break;
            case 28:
                setimagePath( require('../../Images/TVS_XL.png'));
            break;
            case 29:
                    setimagePath( require('../../Images/Xblade.png'));
            break;
            case 30:
                    setimagePath( require('../../Images/Suzuki_gixer.jpg'));
            break;
            case 31:
                    setimagePath( require('../../Images/Suzuki_gixer_sf.jpg'));
            break;
            case 32:
                    setimagePath( require('../../Images/Bajaj_avenger_220.png'));
            break;
            default:
                setimagePath( require('../../Images/Classic_350.png'));
            break;
        }
    }, [])



    return(
        <div className="mainContainer">

            <div className="row" style={{ paddingTop:15}}>
                <div className="col s6">
                    {imagePath !== ''?
                    <img src={imagePath.default} width='90%' height='150'></img>:null}
                </div>
                <div className="col s6 center">
                    <h5 style={{marginTop:50}}>{bikeData.bikeName}</h5>
                </div>
            </div>
           <Tabs>
            <TabList>
            <Tab style={{fontWeight:"bold"}}>Hourly</Tab>
            <Tab style={{fontWeight:"bold"}}>7 Days</Tab>
            <Tab style={{fontWeight:"bold"}}>15 Days</Tab>
            <Tab style={{fontWeight:"bold"}}>30 Days</Tab>
            </TabList>

            <TabPanel>
                <div className="row">
                    <div className="col s9">
                        <p>Mon-Thu (Min 10hrs booking)</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.bikePriceWeekDay} /hr</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Fri-Sun (Min 24hrs booking)</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.bikePriceWeekEnd} /hr</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Free KMs limit</p>
                    </div>
                    <div className="col s3">
                        <p>5 /hr</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Excess KMs charge</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.extraKmsCharge} /km</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="row">
                    <div className="col s9">
                        <p>Price for 7 Days</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.bikePrice7}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Free KMs limit</p>
                    </div>
                    <div className="col s3">
                        <p>{bikeData.kms7day} km</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Excess KMs charge</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.extraKmsCharge} /km</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="row">
                    <div className="col s9">
                        <p>Price for 15 Days</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.bikePrice15}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Free KMs limit</p>
                    </div>
                    <div className="col s3">
                        <p>{bikeData.kms15day} km</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Excess KMs charge</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.extraKmsCharge} /km</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="row">
                    <div className="col s9">
                        <p>Price for 30 Days</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.bikePrice30}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Free KMs limit</p>
                    </div>
                    <div className="col s3">
                        <p>{bikeData.kms30day} km</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s9">
                        <p>Excess KMs charge</p>
                    </div>
                    <div className="col s3">
                        <p>&#8377;{bikeData.extraKmsCharge} /km</p>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
        </div>
    )
}

export default PriceContainer