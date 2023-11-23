import { IconCirclePlus } from '@tabler/icons-react'

import styles from './styles/Form.module.css'

interface FormProps {
	onSubmit: () => void
}

export function Form({ onSubmit }: FormProps) {
	// Desabilitar botão
	// Validar formulário
	// Salvar task e limpar formulário

	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<div className={`container ${styles.container}`}>
				<input type="text" placeholder="Adicione uma nova tarefa" className={styles.input} required />
				<button type="submit" className={styles.button}>
					<span>Criar</span>
					<IconCirclePlus />
				</button>
			</div>
		</form>
	)
}