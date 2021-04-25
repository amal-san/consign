import React, { useState , useEffect} from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, DatePicker, TimePicker, Switch, InputNumber } from 'antd';
import moment from 'moment';


const layout = {
    labelCol: {
      span:6,
    },
    wrapperCol: {
      span: 16,
    },
};


const dateFormat = 'DD-MM-YYYY'

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
    console.log(data)
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
      <Form 
        form={form} 
        name="control-hooks" 
        {...layout} 
        validateMessages={validateMessages} 
        onFinish={onFinish}>
          <h2 style={{textAlign:'center'}}>Tracking ID: {data ? data.tracking_id : null}</h2>
      <Form.Item
        name={['parcel', 'name']}
        label="Name"
        initialValue = {data ? data.name : null}
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
        initialValue = {data ? data.weight : null}
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
      initialValue = {data ? data.sender : null}
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
      initialValue = {data ? data.receiver : null}
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
        initialValue = {data ? data.tracking_details : null}
        rules={[
          {
          },
        ]}
      >
        <Input.TextArea/>
      </Form.Item>
      <Form.Item 
      name="date-picker"
      format={dateFormat}       
      initialValue = {data ? moment(data.created_at, dateFormat) : null} 
      label="DatePicker"
      help="Format: DD-MM-YYYY" 
      >
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