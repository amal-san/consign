import React, { useState , useEffect} from 'react';
import { Modal, Button, message } from 'antd';
import { Form, Input } from 'antd';
import { connect } from 'react-redux'
import { createParcelRequest , createParcelDefault } from './CreateParcel.action'
import { getParcelsRequest } from '../../../pages/admin/Admin.action'
import { isEmpty , usePrevious } from '../../../utils/'



const layout = {
    labelCol: {
      span:6,
    },
    wrapperCol: {
      span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
}


const CreateParcel = (props) => {

  const { createParcelRequest, createParcelDefault, getParcelsRequest, error , data } = props;
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ isLoading , setIsLoading ] = useState(false)

  const prevData = usePrevious(data);
  const prevError = usePrevious(error)


  useEffect(() => {
    console.log('data ', data)
    console.log('prevdata ', prevData)
    if(isEmpty(data) && data !== prevData) {
      setIsLoading(false)
      setIsModalVisible(false)
      createParcelDefault();
      getParcelsRequest();
      message.success("Parcel created")
    }
    if(isEmpty(error)&& error !== prevError){
      message.warning("parcel creation failed")
    }
  },[data, error])

  const showModal = () => {
    setIsModalVisible(true);
  };
  
  const onSubmit = (values) => {
      form.submit();
  }

  const onFinish = (values) => {
      let parcel = values.parcel
      let body = { 
        name: parcel.name,
        weight:parcel.weight,
        sender:parcel.sender,
        receiver:parcel.receiver
      } 
      createParcelRequest(body)
    setIsLoading(true)
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <p onClick={showModal}>
      ➕ Create Parcel      
      </p>
      <Modal title="Add Parcel" visible={isModalVisible} footer={[]} onCancel={handleCancel}>
      <Form form={form} name="control-hooks" {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish}>
      <Form.Item
        name={['parcel', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['parcel', 'weight']}
        label="Weight"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item name={['parcel', 'sender']} 
      label="Sender"
      rules ={[
          {
            required:true,
          }
      ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['parcel', 'receiver']} 
      label="Receiver"
      rules ={[
          {
            required:true,
          }
      ]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
    <div className="modal-footer">
        <Button onClick={onSubmit} loading={isLoading} className="modal-submit" type="text">Add</Button>
    </div>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    data:state.createParcel.createParcelResults,
    error:state.createParcel.createParcelError,
    loading:state.createParcel.createParcelLoading
  }
}


const mapDispatchToProps = {
  createParcelRequest,
  createParcelDefault,
  getParcelsRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateParcel);
