import React, { useState , useEffect} from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, DatePicker, TimePicker, Switch, InputNumber } from 'antd';


const layout = {
    labelCol: {
      span:6,
    },
    wrapperCol: {
      span: 16,
    },
};

const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
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


const UpdateParcel = (props) => {
  let data;

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  if(props) {
    data = props.data
  }

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
    console.log(values);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <p onClick={showModal}>
      📝     
      </p>
      <Modal title="Edit Parcel" visible={isModalVisible} footer={[]} onCancel={handleCancel}>
      <Form form={form} name="control-hooks" {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish}>
          <h2 style={{textAlign:'center'}}>Tracking ID: {data ? data.tracking_id : null}</h2>
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
        <Input />
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
      {/* <Form.Item
        name={['parcel', 'status']}
        label="Status"
        rules={[
          {
          },
        ]}
      >
        <Switch checkedChildren="Delivered" unCheckedChildren="Not Delivered" defaultChecked />
      </Form.Item> */}
      <Form.Item
        name={['parcel', 'details']}
        label="Details"
        rules={[
          {
          },
        ]}
      >
        <Input.TextArea/>
      </Form.Item>
      <Form.Item name="date-picker" label="DatePicker" {...config}>
        <DatePicker />
      </Form.Item>
    </Form>
    <div className="modal-footer">
        <p className="modal-submit" onClick={onSubmit}>
          Submit
        </p>
    </div>
      </Modal>
    </>
  );
};

export default UpdateParcel;