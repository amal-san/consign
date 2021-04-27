import React, { useState , useEffect} from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, DatePicker, TimePicker, Switch, InputNumber } from 'antd';
import moment from 'moment';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';



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
  };


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
        name={['parcel', 'tracking_id']}
        initialValue = { data ? data.tracking_id : null}
      >
        <Input hidden/>
      </Form.Item>
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
      <Form.Item
        name={['parcel', 'deliver_status']}
        label="Delivered"
        valuePropName = { data ? (data.status === null ? 'unchecked' : 'checked') : null}
      >
        <Switch checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined/>} defaultChecked />
      </Form.Item>
      <Form.Item
        name={['parcel', 'details']}
        label="Details"
        initialValue = {data ? data.tracking_details : null}
        rules={[
          {
            required:true,
            message:'Details is required'
          }
        ]}
      >
        <Input.TextArea/>
      </Form.Item>
      <Form.Item 
      name="date-picker"
      format={dateFormat}       
      initialValue = {data ? moment(data.created_at, dateFormat) : null} 
      label="DatePicker"
      extra="format: DD-MM-YYYY" 
      >
        <DatePicker disabled format={'DD-MM-YYYY'} />
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