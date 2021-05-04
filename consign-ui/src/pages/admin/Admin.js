import '../../App.css';
import { Container } from '../../components/layout/Container'
import 'antd/dist/antd.css'
import { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import EmptyGif from '../../assets/empty.gif'
import CreateParcel from '../../components/modals/CreateParcel/CreateParcel'
import ParcelCard from '../../components/ParcelCard'
import ParcelCardLoader from '../../components/loader/ParcelCardLoader';
import { connect } from 'react-redux';
import { getParcelsRequest } from './Admin.action'
import { logoutRequest } from '../login/Login.action'
import { isEmpty } from '../../utils'
import { Select } from 'antd';

const { Option } = Select;




const EmptyParcel = () => {
    return (
        <img
            width='20%'
            height='20%'
            src={EmptyGif}
            style={{textAlign:'center', margin:'0 auto'}}
        />
    )
}


const Admin = (props) => {

    const history = useHistory();

    let { getParcelsRequest , error , loading , data } = props;


    useEffect(()=> {
        getParcelsRequest();
        
    },[])

    

    const handleChange = (values) => {
        let body = { params: values }
        if(values === 'all'){
            getParcelsRequest();
        }
        getParcelsRequest(body)
    }
    

    const onLogout = () => {
        props.logoutRequest();
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <Container primary width="100%" className="admin-ctn" height="100vh">
            <div className="login-nav">
                <h1 >  </h1>
                <h1> 🛠️ admin</h1>
                <h2>{props.username}</h2>
            </div>
            <div className="admin-menu">
                <div>
                    <CreateParcel/>
                    <div className="sort">
                        <Select defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="all"> All </Option>
                            <Option value="delivered">Delivered</Option>
                            <Option value="not-delivered">Not Delivered</Option>
                        </Select>
                    </div>
                    {/* <p> ⚙️ Account Settings </p> */}
                </div>
                <div>
                 <p onClick={onLogout}>🔓 logout </p> 
                </div>
            </div>
            <div className="admin-box">
            {loading ? <ParcelCardLoader/>: null}
            {isEmpty(data) && !isEmpty(error) ? data.Parcels.map((parcel,i) => 
                <ParcelCard
                key={i}
                id={parcel._id}
                name={parcel.name}
                sender={parcel.sender}
                weight={parcel.weight}
                status={parcel.status}
                receiver={parcel.receiver}
                created_at={parcel.created_at}
                tracking_id={parcel.tracking_id}
                tracking_details={parcel.tracking_details}
                />
            ): null}  
            {isEmpty(error) ? <EmptyParcel/>:null}
            </div>
        </Container>
    )
}


const mapStateToProps = state => {
    return {
      data:state.parcels.parcelsResults,
      error:state.parcels.parcelsError,
      loading:state.parcels.parcelsLoading
    }
}
  

const mapDispatchToProps = {
    getParcelsRequest,
    logoutRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin);
