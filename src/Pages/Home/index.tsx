import { FormEvent, useEffect, useState } from 'react';
import './styles.scss';
import Input from '../../components/Input'
import * as Yup from 'yup';

interface IForm {
    nome: string,
    sobrenome: string,
    email: string,
    celular: string,
    senha: string,
    genero: string,
    nascimento: string,
    cor: string,
    opcao: string
}

export default () => {
    const [form, setForm] = useState({} as IForm);
    const [errors, setErrors] = useState({} as Record<string, any>);

    const schema = Yup.object().shape({
        nome: Yup.string().required('O campo "Nome" é obrigatorio'),
        sobrenome: Yup.string().required('O campo "Sobrenome" é obrigatorio'),
        email: Yup.string().required('O campo "Email" é obrigatorio'),
        celular: Yup.string().required('O campo "Celular" é obrigatorio'),
        senha: Yup.string().min(6).max(20).required('O campo "Senha" é obrigatorio'),
        genero: Yup.string().required('O campo "Genero" é obrigatorio'),
        nascimento: Yup.date().min(new Date(1940, 1, 1)).max(new Date()).required('O campo "Data de nascimento" é obrigatorio'),
        cor: Yup.string().required('O campo "Cor" é obrigatorio'),
        opcao: Yup.string().required('O campo "Gênero" é obrigatorio'),
    });

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        try {
            setErrors({});
            await schema.validate(form, {abortEarly: false});
            console.log(form);
        }
        catch(error) {
            const list = {} as Record<string, any>;

            if (error instanceof Yup.ValidationError) {
                console.log(error.inner);
                error.inner.forEach(error => list[error.path!] = error.message);
                console.log(list);
                setErrors(list);
            }
        }
    }

    useEffect(() => {
        console.log(form);
    }, [form]);


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <Input
                    value={form.nome}
                    label='Nome'
                    name='nome'
                    onChange={event => setForm({ ...form, nome: event.currentTarget.value })}
                    error={errors?.nome}
                />
                <Input
                    value={form.sobrenome}
                    label='Sobrenome'
                    name='sobrenome'
                    onChange={event => setForm({ ...form, sobrenome: event.currentTarget.value })}
                    error={errors?.sobrenome}
                />
                <Input
                    value={form.email}
                    label='Email'
                    name='email'
                    type='email'
                    onChange={event => setForm({ ...form, email: event.currentTarget.value })}
                    error={errors?.email}
                />
                <Input
                    value={form.celular}
                    label='Celular'
                    name='celular'
                    type='tel'
                    onChange={event => setForm({ ...form, celular: event.currentTarget.value })}
                    error={errors?.celular}
                />
                <Input
                    value={form.senha}
                    label='Senha'
                    name='senha'
                    type='password'
                    onChange={event => setForm({ ...form, senha: event.currentTarget.value })}
                    error={errors?.senha}
                />
                <Input
                    value={form.nascimento}
                    label='Data de nascimento'
                    name='nascimento'
                    type='date'
                    onChange={event => setForm({ ...form, nascimento: event.currentTarget.value })}
                    error={errors?.nascimento}
                />
                <Input
                    className='color'
                    value={form.cor}
                    label='Qual sua cor favorita?'
                    name='cor'
                    type='color'
                    onChange={event => setForm({ ...form, cor: event.currentTarget.value })}
                    error={errors?.cor}
                />
                <select 
                    value={form.opcao}
                    name='opcao'
                    onChange={event => setForm({ ...form, opcao: event.currentTarget.value})}
                    defaultValue=''
                >
                    <option value='' disabled>Selecione uma opção</option>
                    <option value='a'>Opção A</option>
                    <option value='b'>Opção B</option>
                    <option value='c'>Opção C</option>
                </select>
                <div className="gender">
                    <label>Gênero:
                        <div className="gender-group">
                            <div className="gender-input">
                                <Input
                                    value={form.genero}
                                    label='Feminino'
                                    name='genero'
                                    type='radio'
                                    onChange={event => setForm({ ...form, genero: event.currentTarget.value = 'feminino' })}
                                />
                            </div>
                            <div className="gender-input">
                                <Input
                                    value={form.genero}
                                    label='Masculino'
                                    name='genero'
                                    type='radio'
                                    onChange={event => setForm({ ...form, genero: event.currentTarget.value = 'masculino' })}
                                />
                            </div>
                            <div className="gender-input">
                                <Input
                                    value={form.genero}
                                    label='Outros'
                                    name='genero'
                                    type='radio'
                                    onChange={event => setForm({ ...form, genero: event.currentTarget.value = 'outros' })}
                                />
                            </div>
                        </div>
                    </label>

                </div>
                <button>Continuar</button>
            </form>
        </div>
    )
}