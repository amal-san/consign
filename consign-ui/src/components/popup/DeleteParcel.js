import { Popconfirm, message } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

const DeleteParcel = () => {
    return (
        <Popconfirm
            title="Are you sure to delete this parcel?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <p>🗑️</p>
        </Popconfirm>
    )
}

export default DeleteParcel;