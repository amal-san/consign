import UpdateParcel from './modals/UpdateParcel'
import DeleteParcel from './popup/DeleteParcel';



const ParcelCard = (props) => {
    return (
    <div id={props.id} className="admin-box-content">
        <h2>{props.name}</h2>
        <p>Sender: { props.sender}</p>
        <p>Reciever: {props.receiver}</p>
        <p> Details: {props.tracking_details} </p>
        <p>Tracking Id: {props.tracking_id} </p>
        <p>Created at: {props.created_at}</p>
        <div className="admin-box-settings">
            <UpdateParcel data={props}/>
            <DeleteParcel data={props} />
        </div>
    </div>
    )
}


export default ParcelCard