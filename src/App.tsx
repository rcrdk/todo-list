import { IconClipboardList } from '@tabler/icons-react'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Counters } from './components/Counters'
import { TaskItem } from './components/Task'

import styles from './styles/App.module.css'
import './styles/globals.css'

import { Task } from './types/task'

import { useState } from 'react'

export default function App() {
	const [tasks, setTasks] = useState<Task[]>([])

	const handleCreateNewTask = (newTask: Task) => {
		setTasks([...tasks, newTask])
	}

	const handleTaskStatus = (id: number) => {
		const newTasksWithUpdatedStatus = tasks.map(item => {
			if (item.id === id) {
				const newTaskStatus = item.done ? false : true
				return { ...item, done: newTaskStatus }
			}
			return item
		})

		setTasks(newTasksWithUpdatedStatus)
	}

	const handleTaskDelete = (id: number) => {
		const confirmTaskRemoval = confirm('Deseja mesmo remover esta atividade?')

		if (confirmTaskRemoval) {
			const newTasksWithoutDeletedOne = tasks.filter(item => {
				if (item.id !== id) return item
			})

			setTasks(newTasksWithoutDeletedOne)
		}
	}

	return (
		<>
			<Header />
			<Form createNewTask={handleCreateNewTask} />

			<div className="container">
				<Counters data={tasks} />

				{tasks.length !== 0 && (
					<div className={styles.list}>
						{tasks.map((item) => (
							<TaskItem
								key={item.id}
								data={item}
								onTaskChangeStatus={handleTaskStatus}
								onTaskDelete={handleTaskDelete}
							/>
						))}
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
