import '../App.css';
import { Container } from '../components/layout/Container'
import WaveBottom from '../assets/Bottom.png'
import World from '../assets/World.png'
import { Form, Input, Button, Checkbox } from 'antd';
import SearchPicture from '../assets/Search.png'
import ContentWaveTop from '../assets/ContentTop.png'
import InfiniteScroll from 'react-infinite-scroller';
import 'antd/dist/antd.css'


const { Search } = Input;


const Login = () => {
  
    const onSearch = value => console.log(value);

    return (
        <Container primary width="100%" height="100vh">
            <img src={WaveBottom} width="100%" height="20%" />
            <div className="tracking-div">
                <h1>Track Consignments here</h1>
                <Search
                style={{width:'50%'}}
                placeholder="input search text"
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

export default Login;
