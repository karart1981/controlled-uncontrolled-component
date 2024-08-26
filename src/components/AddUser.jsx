// import {useRef} from 'react'
import {useState} from 'react'

export const AddUser = ({onAdd}) => {
    const [error, setError] = useState("")
    // const name = useRef()
    // const age = useRef()
    // const salary = useRef()
    const handleSubmit = e =>{
        e.preventDefault();
        if(!user.name.trim() || !user.age || !user.salary){
            return setError("Please, fill all the filelds")
        }
        setError("")
        onAdd(user)
        setUser({name: "", age: "", salary: ""})
    }

    const [user, setUser] = useState({
        name: "",
        age: 18,
        salary: 250000
    })
    return <div>
        <h3>AddUser</h3>   
        {/* controlled component / uncontrolled component*/}
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div>
                <input 
                    type="text" 
                    placeholder="enter your name"
                    // ref={name}
                    value={user.name}
                    onChange={e=> setUser({...user, name: e.target.value})}
                />
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="enter your age"
                    // ref={age}
                    value={user.age}
                    onChange={e=> setUser({...user, age: +e.target.value})}
                />
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="enter your salary"
                    // ref={salary}
                    value={user.salary}
                    onChange={e=> setUser({...user, salary: +e.target.value})}
                />
            </div>
            <div>
             <button>submit</button>
            </div>
        </form>
    </div>
}