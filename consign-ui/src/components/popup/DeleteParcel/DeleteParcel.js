import { Popconfirm, message } from 'antd';
import { connect } from 'react-redux'
import { deleteParcelRequest , deleteParcelDefault } from './DeleteParcel.action'
import { getParcelsRequest } from '../../../pages/admin/Admin.action'
import { useEffect } from 'react';
import { isEmpty } from '../../../utils/'




const DeleteParcel = (props) => {
  const { tracking_id , data , error , loading , deleteParcelRequest , deleteParcelDefault, getParcelsRequest } = props;
  

  useEffect(() => {  
    if(isEmpty(data) && tracking_id === data.deleteParcel.tracking_id){
      deleteParcelDefault();
      getParcelsRequest();
      message.success('parcel deleted')
    }
    if(isEmpty(error)){
      message.warning('parcel not deleted')
    }
  },[error, data ])

  const confirm = () => {
    const body = { tracking_id}
    deleteParcelRequest(body);
  }
  const cancel = (e) => {
   //
  }

    return (
        <Popconfirm
            title="Are you sure to delete this parcel?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            id={tracking_id ? tracking_id : null}
        >
            <p>🗑️</p>
        </Popconfirm>
    )
}

const mapStateToProps = state => {
  return {
    data:state.deleteParcel.deleteParcelResults,
    error:state.deleteParcel.deleteParcelError,
    loading:state.deleteParcel.deleteParcelLoading
  }
}


const mapDispatchToProps = {
  deleteParcelRequest,
  getParcelsRequest,
  deleteParcelDefault,
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteParcel);


