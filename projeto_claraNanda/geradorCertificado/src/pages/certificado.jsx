import './certificado.css';
import assinatura from '../assets/images/assinatura.png';

import {useContext} from 'react';
import valorContext from '../context/context';

import logoClarananda from '../assets/images/2gh3r6uXsRvN9kg648m70QyJlRp.svg';

export default function Certificado() {
	const {aluno} = useContext(valorContext);
	const {curso} = useContext(valorContext);
	const {horas} = useContext(valorContext);

	return (
		<section className="certificado">
			<header className="header-certificado">
				<div className="header-titulo">
					<h1>Certificado</h1>
				</div>

				<div className="header-logo">
					<img
						src={logoClarananda}
						alt="logo-clarananda"
					/>
					<p>CNPJ 55.023.218/0001 53</p>
				</div>
			</header>

			<article>
				<p className="descicao-curso">
					A CLARANANDA TREINAMENTOS EM SAÚDE CERTIFICA QUE,
					<span>
						<b> {aluno} </b>
					</span>
					CONCLUIU O <b> {curso}</b>, MINISTRATO PELA PROF. ª CARINE CALAZANS,
					EM 19/05/2024 - XIQUE-XIQUE/BA, COM CARGA HORARIA DE {horas} HORAS.
				</p>
			</article>

			<footer>
				<p>
					<img
						src={assinatura}
						alt="assinatura"
					/>
				</p>
				<p>Carine Calazans</p>
				<p>CRF-Ba 9142</p>
			</footer>
		</section>
	);
}
