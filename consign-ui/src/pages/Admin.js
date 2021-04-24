import '../App.css';
import { Container } from '../components/layout/Container'
import 'antd/dist/antd.css'
import { useHistory } from "react-router-dom";
import CreateParcel from '../components/modals/CreateParcel'
import ParcelCard from '../components/ParcelCard'
import { useQuery, gql } from '@apollo/client';
import ParcelCardLoader from '../components/loader/ParcelCardLoader';


const PARCEL_QUERIES = gql`
query {
    Parcels{
      name
      deliver_status
      tracking_id
      tracking_details
      weight
      sender
      receiver
      created_at
    }
  }
`;


const Admin = () => {

    const history = useHistory();
    const { loading, error, data } = useQuery(PARCEL_QUERIES);


    const onLogout = () => {
        history.push('/')
    }
    return (
        <Container primary width="100%" height="100vh">
            <div className="login-nav">
                <h1 >  </h1>
                <h1> 🛠️ admin</h1>
                <h2></h2>
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
            {data ? data.Parcels.map((parcel,i) => 
                <ParcelCard
                key={i}
                id={parcel._id}
                name={parcel.name}
                sender={parcel.sender}
                receiver={parcel.receiver}
                created_at={parcel.created_at}
                tracking_id={parcel.tracking_id}
                tracking_details={parcel.tracking_details}
                />
            ): null}  
            {error ? "empty....":null}
            </div>
        </Container>
    )
}

export default Admin;
