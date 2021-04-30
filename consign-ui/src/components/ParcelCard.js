import UpdateParcel from './modals/UpdateParcel/UpdateParcel'
import DeleteParcel from './popup/DeleteParcel/DeleteParcel';



const ParcelCard = (props) => {

    const textify = ( value ) => {
        if (typeof(value)) return value[0].length > 20 ? `${value[0].slice(0,15)}...` : value
        else if(value) return value.length > 20 ? `${value.slice(0,15)}...` : value
        else return value
    }
    console.log(props)

    return (
    <div id={props.id} className="admin-box-content">
        <h2>{props.name}</h2>
        <p> Weight: {props.weight}</p>
        <p>Sender: { props.sender}</p>
        <p>Reciever: {props.receiver}</p>
        <p> Details: {props.tracking_details.length > 0 ? textify(props.tracking_details) : "NIL"} </p>
        <p>Status: {props.status === true ? "✔️": "🚫"}</p>
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