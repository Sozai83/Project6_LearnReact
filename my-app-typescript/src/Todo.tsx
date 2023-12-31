
import { FC } from 'react';
import { TodoType } from './types/todo'

//Using pick, you can choose items you need from the defined type. Pick<TodoType, "title" | "userId" | "completed">
// You can also use Omit (remove items you do not need). Omit<TodoType, "id">
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? 'Completed' : 'Incomplete'
    return (
        <p>[{completeMark}] {title} User: {userId}</p >)
}