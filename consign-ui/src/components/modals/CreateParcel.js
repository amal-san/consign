import React, { useState , useEffect} from 'react';
import { Modal, Button, message } from 'antd';
import { Form, Input, InputNumber , DatePicker } from 'antd';
import moment from 'moment';
import { useQuery, gql , useLazyQuery, useMutation} from '@apollo/client';



const CREATE_PARCEL = gql` 
mutation createParcel($name:String! $weight:String! $sender:String! $receiver:String!) {
    createParcel(name:$name weight:$weight sender:$sender receiver:$receiver){
     name
     weight
     sender
     receiver
  }
}`



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


const CreateParcel = () => {

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ isLoading , setIsLoading ] = useState(false)
  const [createParcel , { loading, data , error }] = useMutation(CREATE_PARCEL);


  useEffect(() => {
    if(data) {
      setIsLoading(false)
      setIsModalVisible(false)
      message.success("Parcel created")
    }
    if(error){
      message.warning("parcel creation failed")
    }
  },[data, error])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const onSubmit = (values) => {
      form.submit();
  }

  const onFinish = (values) => {
      let parcel = values.parcel
      createParcel({ variables: { 
        name: parcel.name,
        weight:parcel.weight,
        sender:parcel.sender,
        receiver:parcel.receiver
      } 
    })        
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

export default CreateParcel;