import { Task } from '../types/task'

import { IconCheck, IconTrash } from '@tabler/icons-react'

import styles from './styles/Task.module.css'

interface TaskProps {
	data: Task
}

export function TaskItem({ data }: TaskProps) {
	const isDoneClass = styles.task + ' ' + styles['task--done']

	return (
		<div className={data.done ? isDoneClass : styles.task}>
			<div className={styles.checkbox}>
				{data.done && <IconCheck /> }
			</div>
			<p>{data.description}</p>
			<button type="button" title="Remover atividade" className={styles.delete}>
				<IconTrash />
			</button>
		</div>
	)
}

