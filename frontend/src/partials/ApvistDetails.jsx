import '../css/apvist-details.css'

const ApvistDetailts = (props) => {
    const Apvist = props.Apvist;
    return ( 
            <div className="apvist-details">
               <h4 className="fn">{Apvist.lastname} {Apvist.firstname}</h4>
            <p><strong>رقم الجيل : </strong>{Apvist.generation}</p>
            <p><strong>عضو في فريق : </strong>{Apvist.team}</p>
            <p>{Apvist.createdAt.toString().slice(0,10).split('T') } | {Apvist.createdAt.toString().slice(10,16).split('T')}</p>
            </div>
     );
}
 
export default ApvistDetailts;