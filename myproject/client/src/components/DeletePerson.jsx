import axios from 'axios';


const DeletePerson = (props) => {
    const {removeFromDom,personId} = props

    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/users/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <button onClick={(e)=>{deletePerson(personId)}}> Delete </button>
        </div>
    )
}

export default DeletePerson;    