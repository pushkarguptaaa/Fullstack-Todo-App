export function Todos({todos}) {
    return <div>
        {
            todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => {
                        fetch("http://localhost:3000/completed",{
                            method: "PUT",
                            body: JSON.stringify({
                                id: todo._id
                            }),
                            headers:{
                                "Content-Type": "application/json"
                            }
                        })
                        .then(async (res) => {
                            const json = await res.json()
                            alert(JSON.stringify(json))
                        })
                    }}>{todo.completed ? "Completed" : "Mark as Complete"}</button>
                </div>
            })
        }
    </div>
}