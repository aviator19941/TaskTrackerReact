
const Tasks = ({ tasks }) => {
    return (
        // setTasks([...tasks], {})
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
