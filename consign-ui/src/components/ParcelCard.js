import { isEmpty } from '../utils';
import UpdateParcel from './modals/UpdateParcel/UpdateParcel'
import DeleteParcel from './popup/DeleteParcel/DeleteParcel';



const ParcelCard = (props) => {


    const textify = ( value ) => {
        if(typeof(value) == 'object'){
            let arrlen = value.length;
            if( arrlen > 0){
                return (value[arrlen - 1].details.length > 20) ? value[arrlen - 1].details.slice(0,15) + '...' : value[arrlen - 1].details
            }
        }
        return value
    }

    return (
    <div id={props.id} className="admin-box-content">
        <h2>{props.name}</h2>
        <p> Weight: {props.weight}</p>
        <p>Sender: { props.sender}</p>
        <p>Reciever: {props.receiver}</p>
        <p>Latest Detail: {isEmpty(props.tracking_details) > 0 ? textify(props.tracking_details) : "NIL"} </p>
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