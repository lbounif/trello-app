const TAGS = {
    work: "#ff675f",
    study: "#63ffbb",
    hobby: "#833ad9",
  }
 // "#ff675f": TAGS[work] TAGS.work
//props:
//tag can be: work, study, hobby
//tag, title, description, section, dateTask, toPreviousStep, toNextStep
const Task = (props) => {
    return (
        <div className="card-container">
            {/* Tag of the task */}
            <div 
                className="card-tag" 
                style={{backgroundColor: TAGS[props.tag]}}>
            </div>
            <div className="card-title"> {props.title}</div>
            <hr></hr>
            <div className="card-description">{props.description}</div>
            <div className="card-footer">
                <div className="datetask">{props.dateTask}</div>
                <div className="card-actions">
                    {/* do not display previous button when we are in To Do section */}
                    {props.section === "To Do" ? null: (
                    <div 
                        className="action"
                        onClick={()=> {props.toPreviousStep(props.id)}}>
                        Previous
                    </div>
                    )}
                     {/* do not display next button when we are in Completed section */}
                    {props.section === "Completed"? null: (
                    <div 
                        className="action"
                        onClick={()=> {props.toNextStep(props.id)}}>
                        Next
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Task