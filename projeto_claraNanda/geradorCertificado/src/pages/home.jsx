import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import valorContext from '../context/context';

export default function Home() {
	const {aluno, setAluno} = useContext(valorContext);
	const {curso, setCurso} = useContext(valorContext);
	const {horas, setHoras} = useContext(valorContext);

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if (aluno === '' && curso === '' && horas === '') {
			alert('Preencha todos os campos');
		} else {
			navigate('./certificado');
		}
	}

	function handleClear() {
		setAluno('');
		setCurso('');
		setHoras('');
	}

	return (
		<>
			<section className="Container-form">
				<form>
					<h2>Certificação</h2>
					<label htmlFor="nomeAluno">Nome do Aluno</label>
					<input
						value={aluno}
						type="text"
						placeholder="Gilcema Machado Lopes"
						name="nomeAluno"
						onChange={(e) => setAluno(e.target.value)}
					/>

					<label htmlFor="nomeCurso">Curso</label>
					<input
						value={curso}
						type="text"
						placeholder="curso"
						name="nomeCurso"
						onChange={(e) => setCurso(e.target.value)}
					/>

					<label htmlFor="cargaHoraria">Carga Horária</label>
					<input
						value={horas}
						type="text"
						placeholder="10"
						name="cargaHoraria"
						onChange={(e) => setHoras(e.target.value)}
					/>

					<button
						type="submit"
						onClick={handleSubmit}
					>
						Gerar Certificado
					</button>

					<button
						type="button"
						onClick={handleClear}
					>
						Limpar campos
					</button>
				</form>
			</section>
		</>
	);
}
