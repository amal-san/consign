import '../../App.css';
import { Container } from '../../components/layout/Container'
import 'antd/dist/antd.css'
import { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import CreateParcel from '../../components/modals/CreateParcel/CreateParcel'
import ParcelCard from '../../components/ParcelCard'
import ParcelCardLoader from '../../components/loader/ParcelCardLoader';
import { connect } from 'react-redux';
import { getParcelsRequest } from './Admin.action'
import { logoutRequest } from '../login/Login.action'
import { isEmpty } from '../../utils'



const EmptyParcel = () => {
    return (
        <h1 style={{textAlign:'center',flex:1, fontSize:'xxx-large', margin:'10%'}}>Empty....</h1>
    )
}


const Admin = (props) => {

    const history = useHistory();

    const { getParcelsRequest , error , loading , data } = props;

    useEffect(()=> {
        getParcelsRequest();
    },[])


    const onLogout = () => {
        logoutRequest();
        history.push('/')
    }

    return (
        <Container primary width="100%" height="100vh">
            <div className="login-nav">
                <h1 >  </h1>
                <h1> 🛠️ admin</h1>
                <h2>{props.username}</h2>
            </div>
            <div className="admin-menu">
                <div>
                    <CreateParcel/>
                    <p> 🔀 Sort</p>
                    <p> ⚙️ Account Settings </p>
                </div>
                <div>
                 <p onClick={onLogout}>🔓 logout </p> 
                </div>
            </div>
            <div className="admin-box">
            {loading ? <ParcelCardLoader/>: null}
            {isEmpty(data) ? data.Parcels.map((parcel,i) => 
                <ParcelCard
                key={i}
                id={parcel._id}
                name={parcel.name}
                sender={parcel.sender}
                weight={parcel.weight}
                status={parcel.deliver_statu}
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