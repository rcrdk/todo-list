import { Task } from '../types/task'

import { IconCheck, IconTrash } from '@tabler/icons-react'

import styles from './styles/Task.module.css'

interface TaskProps {
	data: Task,
	onTaskChangeStatus: (id: number) => void
	onTaskDelete: (id: number) => void
}

export function TaskItem({ data, onTaskChangeStatus, onTaskDelete }: TaskProps) {
	const isDoneClass = styles.task + ' ' + styles['task--done']

	return (
		<div className={data.done ? isDoneClass : styles.task}>
			<div
				className={styles.checkbox}
				onClick={() => onTaskChangeStatus(data.id)}
			>
				{data.done && <IconCheck /> }
			</div>
			<p>{data.description}</p>
			<button
				type="button"
				title="Remover atividade"
				className={styles.delete}
				onClick={() => onTaskDelete(data.id)}
			>
				<IconTrash />
			</button>
		</div>
	)
}

