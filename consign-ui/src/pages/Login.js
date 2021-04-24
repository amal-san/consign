import '../App.css';
import { Container } from '../components/layout/Container'
import TopBg from '../assets/TopBackground.png'
import { Form, Input, Button, Checkbox ,message } from 'antd';
import SearchPicture from '../assets/Search.png'
import ContentWaveTop from '../assets/ContentTop.png'
import InfiniteScroll from 'react-infinite-scroller';
import 'antd/dist/antd.css'
import { useHistory } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';





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
  
const LOGIN_QUERY = gql` 
query Login($username:String! $password:String!) {
    Login(username:$username password:$password){
    username 
  }
}`


const Login = () => {


    useEffect(() => {
        if(error){
            message.warn("Incorrect username or password")
        }
        if(data){
            history.push('/admin')
        }
    })

    const [Login, { loading, data , error }] = useLazyQuery(LOGIN_QUERY);

    const [form] = Form.useForm();


    const history = useHistory();

    const onSubmit = (values) => {
        form.submit()
    }

    const handleHome = () => history.push('/')
  
    const onFinish = (values) => {
        Login({ variables: { username: values.username, password: values.password } })
        message.info("Logging in...")
        
    };
   
      
    const onFinishFailed = (errorInfo) => {
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
                    form={form}
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
                </Form>
                <div className="modal-footer">
                    <p className="modal-submit" onClick={onSubmit}>
                    Log in
                    </p>
                </div>
                </div>
            </div>
        </Container>
    )
}

export default Login;
