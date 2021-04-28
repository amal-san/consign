import React, { useState , useEffect} from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, DatePicker, TimePicker, Switch, InputNumber , message } from 'antd';
import { updateParcelDefault , updateParcelRequest} from './UpdateParcel.action'
import { getParcelsRequest } from '../../../pages/admin/Admin.action'
import moment from 'moment';
import { connect } from 'react-redux'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { isEmpty } from '../../../utils/'




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
  const [ isLoading , setIsLoading ] = useState(false)
  const { results , error , loading , updateParcelRequest , updateParcelDefault, getParcelsRequest } = props;
  const [ status , setStatus ] = useState(data ? data.status : false)

  if(props){
    data = props.data;
  }

  useEffect(() => {
    if(isEmpty(results) && data.tracking_id === results.updateParcel.tracking_id){
      updateParcelDefault();
      getParcelsRequest();
      setIsLoading(false)
      setIsModalVisible(false)
      message.success('parcel updated')
    }
    if(isEmpty(error)){
      setIsLoading(false)
      setIsModalVisible(false)
      message.warning('parcel not updated')
    }
  },[error, results ])

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    console.log(values)
    let parcel = values.parcel
    let body = { 
        name: parcel.name,
        weight:parcel.weight,
        sender:parcel.sender,
        receiver:parcel.receiver,
        tracking_id:data.tracking_id,
        tracking_details:parcel.details,
        status:status

    } 
    updateParcelRequest(body)
    setIsLoading(true);
  };

  const statusChange = () => {
    setStatus(!data.status)
  }

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
      <Form.Item
        name={['parcel', 'status']}
        label="Delivered"
      >
        <Switch defaultChecked={data ? data.status : false}  onChange={statusChange}checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined/>} />
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
        <Button onClick={onSubmit} loading={isLoading} className="modal-submit" type="text">Update</Button>
    </div>
      </Modal>
    </>
  );
};


const mapStateToProps = state => {
  return {
    results:state.updateParcel.updateParcelResults,
    error:state.updateParcel.updateParcelError,
    loading:state.updateParcel.updateParcelLoading
  }
}


const mapDispatchToProps = {
  updateParcelRequest,
  updateParcelDefault,
  getParcelsRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateParcel);


