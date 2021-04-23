import '../App.css';
import { Container } from '../components/layout/Container'
import TopBg from '../assets/TopBackground.png'
import { Form, Input, Button, Checkbox } from 'antd';
import SearchPicture from '../assets/Search.png'
import ContentWaveTop from '../assets/ContentTop.png'
import InfiniteScroll from 'react-infinite-scroller';
import 'antd/dist/antd.css'
import { useHistory } from "react-router-dom";



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

    const history = useHistory();

    const handleHome = () => history.push('/')
  
    const onFinish = (values) => {
          console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
    };

    return (
        <Container primary width="100%" height="100vh">
            <div className="login-nav">
                <h1 onClick={handleHome}> 🏡 </h1>
                <h1> 🔓 Sign-in </h1>
                <h1>  </h1>
            </div>
            <div className="login-div">
                <div style={{width:'100%'}}>
                    <h2>Sign-in</h2>
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
