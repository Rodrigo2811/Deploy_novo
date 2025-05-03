import {createContext, useState} from 'react';

const ValorContext = createContext();

export const ValorProvider = ({children}) => {
	const [aluno, setAluno] = useState('');
	const [curso, setCurso] = useState('');
	const [horas, setHoras] = useState('');

	return (
		<ValorContext.Provider
			value={{aluno, setAluno, curso, setCurso, horas, setHoras}}
		>
			{children}
		</ValorContext.Provider>
	);
};

export default ValorContext;
