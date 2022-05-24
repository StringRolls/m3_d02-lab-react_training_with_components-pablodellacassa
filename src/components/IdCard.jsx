export default function IdCard(props){
    return (
        <div className="profile-container">
            <img className="picture App-logo" src={props.picture} alt="" />
            <div className="prop-list">
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth date: </strong>{props.birth}</p>
            </div>
        </div>
    )
}
