import React, { useState , useEffect} from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, InputNumber } from 'antd';


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
    // types: {
    //   email: '${label} is not a valid email!',
    //   number: '${label} is not a valid number!',
    // },
    // number: {
    //   range: '${label} must be between ${min} and ${max}',
    // },
  };
  /* eslint-enable no-template-curly-in-string */


const CreateParcel = () => {

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
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
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};

export default CreateParcel;