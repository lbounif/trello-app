import Task from './Task'
//props: 
//1. title (Todo, currently doing, completed)
//2. data: array of tasks
//3. toPreviousStep
//4. toNextStep
const Section = (props) => {
    return (
        <div className="section-container">
            <div className="section-header">{props.title}</div>
            {props.data.map((task)=> {
                return (
                    <Task 
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        tag={task.tag}
                        dateTask={task.ddl}
                        section={props.title}
                        toPreviousStep={props.toPreviousStep}
                        toNextStep={props.toNextStep}/>
                )
            })}
        </div>
    )
}

export default Section