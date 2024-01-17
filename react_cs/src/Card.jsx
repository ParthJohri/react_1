import './Card.css'
const card = (props) =>{
    console.log(props);
    return(
    <div className="card">
        <h1>{props.title}</h1>
        <h3>{props.content}</h3>
    </div>
    )
}
export default card;