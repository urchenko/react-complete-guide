import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-fetch-tasks';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTasksRequest } = useHttp();

  const createTasks = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    sendTasksRequest(
      {
        url: 'https://react-http-cee1e-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      createTasks.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
