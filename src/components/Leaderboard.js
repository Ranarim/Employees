import {connect} from "react-redux";
import styles from "../stylesheets/leaderboard.module.css";


const Leaderboard = (props) => {
const {users} = props;
const objToArr = Object.keys(users)

const usersArr = []
objToArr.map((user) =>
    usersArr.push(users[user])
)

usersArr.map((user,index) => 
    user.numAnswerQuestions = Object.keys(usersArr[index].answers).length + user.questions.length
)

usersArr.sort(function(a, b) {
    return parseFloat(b.numAnswerQuestions) - parseFloat(a.numAnswerQuestions);
}); 

return (
        <div className={styles.leaderboard}>
        <table className={styles.table}>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
          {usersArr.map((user) => {
            return (
              <tbody key={user.id}>
                <td className={styles.userPic}><img src={user.avatarURL} alt="" />{user.name}</td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tbody>
            )
          })}
        </table>
      </div>
    )
}

const mapStateToProps = ({users}) => {
    return (
        {
            users
        }
    )
}

export default connect(mapStateToProps)(Leaderboard )