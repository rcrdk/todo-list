import { IconClipboardList } from '@tabler/icons-react'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Counters } from './components/Counters'
import { TaskItem } from './components/Task'

import styles from './styles/App.module.css'
import './styles/globals.css'

import { useState } from 'react'
import { Task } from './types/task'

export default function App() {
	const [tasks, setTasks] = useState<Task[]>([])

	const handleCreateNewTask = () => {
		event?.preventDefault()

		// Salvar task
	}

	// Deletar task

	return (
		<>
			<Header />
			<Form onSubmit={handleCreateNewTask} />

			<div className="container">
				<Counters data={tasks} />

				{tasks.length !== 0 && (
					<div className={styles.list}>
						{tasks.map((item) => <TaskItem key={item.description} data={item} />)}
					</div>
				)}

				{tasks.length === 0 && (
					<div className={styles.empty}>
						<IconClipboardList />

						<p>
							<strong>Você ainda não tem tarefas cadastradas.</strong>
							Crie tarefas e organize seus itens a fazer.
						</p>
					</div>
				)}
			</div>
		</>
	)
}
