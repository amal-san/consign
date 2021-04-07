import '../App.css';
import { Container } from '../components/layout/Container'
import { Input } from 'antd';
import { useHistory } from 'react-router-dom'
import SearchPicture from '../assets/Search.png'
import 'antd/dist/antd.css'


const { Search } = Input;


const Track = () => {

    const history = useHistory();

    const handleHome = () => history.push('/')
  
    const onSearch = value => console.log(value);

    return (
        <Container primary width="100%" height="100vh">
            <div className="track-nav">
                <h1 onClick={handleHome}> 🏡 </h1>
                <h1> 🔔 track consignments here</h1>
                <h1>  </h1>
            </div>
            <div className="tracking-div">
                <Search
                style={{width:'50%'}}
                placeholder="enter tracking code here "
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                />
                <img src={SearchPicture} width="50%"></img>
            </div>
        </Container>
    );
}

export default Track;
