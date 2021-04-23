import '../App.css';
import { Container } from '../components/layout/Container'
import 'antd/dist/antd.css'
import { useHistory } from "react-router-dom";



const Admin = () => {

    const history = useHistory();

    return (
        <Container primary width="100%" height="100vh">
            <div className="login-nav">
                <h1 >  </h1>
                <h1> 🛠️ admin</h1>
                <h2> 🔓 logout </h2>
            </div>
            <div className="admin-menu">
                <p>Create Parcel </p>
                <p>Sort</p>
                <p>Account Settings </p>
            </div>
            <div className="admin-box">
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>
            <div className="admin-box-content">Hello</div>

            </div>
        </Container>
    )
}

export default Admin;
