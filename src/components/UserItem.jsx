export const UserItem = ({onSalaryUp, user:{id, name, age, salary}}) => {
    return <tr className={salary > 950000 ? "fill" : null}>
        <td>{id}</td>  
        <td>{name}</td>  
        <td>{age}</td>      
        <td>{salary}</td>  
        <td>
            <button onClick={()=> onSalaryUp(id)}>salary up</button>
            <button>salary down</button>
            <button>delete</button>
        </td>  
    </tr>
}