import { IconCirclePlus } from '@tabler/icons-react'

import styles from './styles/Form.module.css'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Task } from '../types/task'

interface FormProps {
	createNewTask: (task: Task) => void
}

export function Form({ createNewTask }: FormProps) {
	const [newTask, setNewTask] = useState('')

	const isNewTaskEmpty = newTask.length === 0

	const handleCreateNewTask = (event: FormEvent) => {
		event.preventDefault()

		createNewTask({
			id: new Date().getTime(),
			description: newTask,
			done: false
		})

		setNewTask('')
	}

	const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.target.setCustomValidity('')
		setNewTask(event.target.value)
	}

	const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
		event.target.setCustomValidity('Você precisa descrever a atividade.')
	}

	return (
		<form onSubmit={handleCreateNewTask} className={styles.form}>
			<div className={`container ${styles.container}`}>
				<input
					type="text"
					placeholder="Adicione uma nova tarefa"
					className={styles.input}
					value={newTask}
					onChange={handleNewTaskChange}
					onInvalid={handleNewTaskInvalid}
					required
				/>

				<button
					type="submit"
					className={styles.button}
					disabled={isNewTaskEmpty}
				>
					<span>Criar</span>
					<IconCirclePlus />
				</button>
			</div>
		</form>
	)
}