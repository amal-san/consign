import '../App.css';
import { Container } from '../components/layout/Container'
import 'antd/dist/antd.css'
import { useHistory } from "react-router-dom";
import CreateParcel from '../components/modals/CreateParcel'
import UpdateParcel from '../components/modals/UpdateParcel'
import DeleteParcel from '../components/popup/DeleteParcel';



const Admin = () => {

    const history = useHistory();

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
                 <p>🔓 logout </p> 
                </div>
                
            </div>
            <div className="admin-box">
            <div className="admin-box-content">
                <h2>Name</h2>
                <p>Sender</p>
                <p>Reciever</p>
                <p> Details </p>
                <p>Tracking Id</p>
                <p>Created at</p>
                <div className="admin-box-settings">
                    <UpdateParcel/>
                    <DeleteParcel/>
                </div>
            </div>
            <div className="admin-box-content">
                <h2>Name</h2>
                <p>Sender</p>
                <p>Reciever</p>
                <p> Details </p>
                <p>Tracking Id</p>
                <p>Created at</p>
                <div className="admin-box-settings">
                    <UpdateParcel/>
                    <DeleteParcel/>
                </div>
            </div>
            <div className="admin-box-content">
                <h2>Name</h2>
                <p>Sender</p>
                <p>Reciever</p>
                <p> Details </p>
                <p>Tracking Id</p>
                <p>Created at</p>
                <div className="admin-box-settings">
                    <UpdateParcel/>
                    <DeleteParcel/>
                </div>
            </div>
            </div>
        </Container>
    )
}

export default Admin;
