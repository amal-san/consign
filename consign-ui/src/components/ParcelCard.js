import UpdateParcel from './modals/UpdateParcel/UpdateParcel'
import DeleteParcel from './popup/DeleteParcel/DeleteParcel';



const ParcelCard = (props) => {
    return (
    <div id={props.id} className="admin-box-content">
        <h2>{props.name}</h2>
        <p> Weight: {props.weight}</p>
        <p>Sender: { props.sender}</p>
        <p>Reciever: {props.receiver}</p>
        <p> Details: {props.tracking_details.length > 0 ? props.tracking_details : "NIL"} </p>
        <p>Status: {props.status === true ? "Delivered": "Not Delivered"}</p>
        <p>Tracking Id: {props.tracking_id} </p>
        <p>Created at: {props.created_at}</p>
        <div className="admin-box-settings">
            <UpdateParcel data={props}/>
            <DeleteParcel tracking_id={props.tracking_id} />
        </div>
    </div>
    )
}


export default ParcelCard