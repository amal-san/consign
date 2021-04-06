import '../App.css';
import { Container } from '../components/layout/Container'
import WaveBottom from '../assets/Bottom.png'
import TopBg from '../assets/TopBackground.png'
import World from '../assets/World.png'
import { Form, Input, Button, Checkbox } from 'antd';
import SearchPicture from '../assets/Search.png'
import ContentWaveTop from '../assets/ContentTop.png'
import InfiniteScroll from 'react-infinite-scroller';
import 'antd/dist/antd.css'


const { Search } = Input;

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
    },
  };
  



const Login = () => {
  
    const onSearch = value => console.log(value);

    const onFinish = (values) => {
          console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
    };

    return (
        <Container primary width="100%" height="100vh">
            <div className="home-nav" style={{height:'40%'}}></div>
            <div className="login-div">
                <h1>login</h1>
                <div style={{width:'100%'}}>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        </Container>
    )
}

export default Login;
