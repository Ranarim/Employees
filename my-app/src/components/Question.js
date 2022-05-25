import {connect} from "react-redux"
import { formatQuestion } from "../utils/helpers"
import styles from "../stylesheets/question.module.css"
import { Link } from "react-router-dom"

const Question = (props) => {
    var timestamp = props.question.timestamp
    var date = new Date(timestamp); 
    var link = `/questions/${props.id}`
    
    return (
    <Link to={link} className={styles.question_card}> 
        <h4>{props.question.name}</h4> 
        <p>{"Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds()}</p>
    </Link>

)
}

const mapStateToProps = ({authedUser,users,questions},{id}) => {
    const question = questions[id];
    
    return (
        {
            authedUser,
            question: question ?
            formatQuestion(question,users[question.author]) : null, 
            // What is the peace of state in the store, this component cares about? --> tweets
            // What will show up as a property on this container
        }
    )
}

export default connect(mapStateToProps)(Question)


