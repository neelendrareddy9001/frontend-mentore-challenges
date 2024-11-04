

import '../css/TaskColumn.css';
import TaskCard from './TaskCard';

const TaskColumn = (props) => {
    const {title, icon} = props;
  return (
    <section className="task_column">
      <h2 className="task_column_heding">
        <img className="tsk_column_icon" src={icon} alt="" /> {title}
      </h2>
    
    </section>
  );
};

export default TaskColumn;
