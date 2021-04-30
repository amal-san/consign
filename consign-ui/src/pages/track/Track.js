import '../../App.css';
import { Container } from '../../components/layout/Container'
import { Input, Button, message, Timeline } from 'antd';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { trackParcelRequest, trackParcelDefault } from './Track.action'
import SearchPicture from '../../assets/Search.png'
import 'antd/dist/antd.css'
import { isEmpty } from '../../utils';



const Track = (props) => {

    const { data , error , loading , trackParcelDefault , trackParcelRequest } = props

    useEffect(()=> {
        if(isEmpty(error)){
            message.warn(error[0].message)
            setIsLoading(false)
        }
        if(isEmpty(data)){
            setImageShow(false)
            setIsLoading(false)
            trackParcelDefault();
        }
    },[data ,error])

    const [ isLoading , setIsLoading ] = useState(false)

    const [ params , setParams ] = useState(' ');
    const [ imageShow , setImageShow ] = useState(true)

    const history = useHistory();

    const handleHome = () => history.push('/')
  
    const onSearch = () => {
       setIsLoading(true)
       if(params?.trim().length >  0){
           const body = {
               tracking_id:params
           }
           trackParcelRequest(body)
           
       }
       else {
           setIsLoading(false)
           message.warn("Fill the field")
       }
    }

    const handleChange =  e => {
        setParams(e.target.value)
    }


    return (
        <Container primary width="100%" height="100vh">
            <div className="track-nav">
                <h1 onClick={handleHome}> 🏡 </h1>
                <h1> 🔔 track consignments here</h1>
                <h1>  </h1>
            </div>
            <div className="tracking-div">
                <div style={{display:'flex',flexDirection:'row', width:'60%'}}>
                    <Input 
                        size="large" 
                        value={params} 
                        onChange={handleChange} 
                        placeholder="enter tracking id" 
                    />
                    <Button onClick={onSearch} loading={isLoading} className="modal-submit search-btn" type="text">Search</Button>
                </div>
                    {imageShow ? <img style={{}} src={SearchPicture} width="50%"></img> : null}
                    {!imageShow ? 
                    <div style={{ display:'flex', justifyContent:'space-around', width:'100%', alignItems:'center'}}>
                        <div>
                            <h1>Name: {data.ParcelInfo.name}</h1>
                            <h1>Weight: {data.ParcelInfo.weight}</h1>  
                            <h1>Sender: {data.ParcelInfo.sender}</h1>
                        </div>
                        <div className="timeline">
                            <Timeline mode='left'>
                                {data.ParcelInfo.tracking_details.map((detail, i , array) =>
                                <Timeline.Item label={detail.date}  color={(i == 0 || i === array.length - 1) ? 'green' : 'blue'} key={`timeline-${i}`}>{detail.details}</Timeline.Item> 
                                )}
                            </Timeline>
                        </div>      
                    </div> : null}
            </div>
            
        </Container>
    );
}

const mapStateToProps = state => {
    return {
      data:state.trackParcel.trackParcelResults,
      error:state.trackParcel.trackParcelError,
      loading:state.trackParcel.trackParcelLoading
    }
  }
  
  
const mapDispatchToProps = {
    trackParcelRequest,
    trackParcelDefault,
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Track);
  

