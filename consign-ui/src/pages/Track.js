import '../App.css';
import { Container } from '../components/layout/Container'
import { Input, Button } from 'antd';
import { useEffect , useState } from 'react';
import { useHistory } from 'react-router-dom'
import SearchPicture from '../assets/Search.png'
import 'antd/dist/antd.css'


const { Search } = Input;


const Track = () => {

    const [ isLoading , setIsLoading ] = useState(false)

    const [ params , setParams ] = useState(' ');

    const history = useHistory();

    const handleHome = () => history.push('/')
  
    const onSearch = value => console.log(value);

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
                    <Input size="large" value={params} onChange={handleChange} placeholder="Basic usage" />
                    <Button onClick={onSearch} className="modal-submit search-btn" type="text">Search</Button>
                </div>
                <img src={SearchPicture} width="50%"></img>
            </div>
        </Container>
    );
}

export default Track;
