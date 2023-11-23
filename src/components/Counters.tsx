import { Task } from '../types/task'

import styles from './styles/Counters.module.css'

interface CounterProps {
	data: Task[]
}

export function Counters({ data }: CounterProps) {
	const countTasks = data.length || 0
	const countCompletedTasks = data.filter(item => item.done).length || 0

	return (
		<div className={styles.counters}>
			<span className={styles.counter}>
				Tarefas criadas
				<small>{countTasks}</small>
			</span>

			<span className={styles.counter}>
				Concluídas
				{countTasks === 0 ? (
					<small>{countCompletedTasks}</small>
				) : (
					<small>{countCompletedTasks} de {countTasks}</small>
				)}
			</span>
		</div>
	)
}
