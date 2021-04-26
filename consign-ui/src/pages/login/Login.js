import '../../App.css';
import { Container } from '../../components/layout/Container'
import { Form, Input, Button, message } from 'antd';
import 'antd/dist/antd.css'
import { useHistory } from "react-router-dom";
import { useEffect, useState} from 'react';
import { loginRequest } from './Login.action'
import { connect } from 'react-redux'
import { isEmpty } from '../../utils/'



  

const Login = (props) => {

    const { error , data , loginRequest } = props;
    const [ isLoading , setIsLoading ] = useState(false);



    useEffect((i) => {
        if(isEmpty(error)){
            setIsLoading(false)
            console.log(i)
            message.warn("Incorrect username or password")
        }
        if(isEmpty(data)){
            history.push('/admin')
        }
    },[error, data])


    const [form] = Form.useForm();


    const history = useHistory();

    const onSubmit = (values) => {
        form.submit()
    }

    const handleHome = () => history.push('/')
  
    const onFinish = (values) => {
        const body = { username:values.username, password:values.password}
        loginRequest(body)
        setIsLoading(true)
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
                    <Button onClick={onSubmit} loading={isLoading} className="modal-submit" type="text">Log in</Button>
                </div>
                </div>
            </div>
        </Container>
    )
}


const mapStateToProps = state => {
    return {
      data:state.login.loginResults,
      error:state.login.loginError,
      loading:state.login.loginLoading
    }
}
  

const mapDispatchToProps = {
    loginRequest,
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
