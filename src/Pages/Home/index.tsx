import { FormEvent, useEffect, useState } from 'react';
import './styles.scss';
import Input from '../../components/Input'

interface IForm {
    nome: string,
    sobrenome: string,
    email: string,
    celular: string,
    senha: string,
    genero: string,
    nascimento: string,
    cor: string
}

export default () => {

    const [form, setForm] = useState({} as IForm);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    useEffect(() => {
        console.log(form)
    }, [form])


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <Input
                    value={form.nome}
                    label='Nome'
                    name='nome'
                    onChange={event => setForm({ ...form, nome: event.currentTarget.value })}
                />
                <Input
                    value={form.sobrenome}
                    label='Sobrenome'
                    name='sobrenome'
                    onChange={event => setForm({ ...form, sobrenome: event.currentTarget.value })}
                />
                <Input
                    value={form.email}
                    label='Email'
                    name='email'
                    type='email'
                    onChange={event => setForm({ ...form, email: event.currentTarget.value })}
                />
                <Input
                    value={form.celular}
                    label='Celular'
                    name='celular'
                    type='tel'
                    onChange={event => setForm({ ...form, celular: event.currentTarget.value })}
                />
                <Input
                    value={form.senha}
                    label='Senha'
                    name='senha'
                    type='password'
                    onChange={event => setForm({ ...form, senha: event.currentTarget.value })}
                />
                <Input
                    value={form.nascimento}
                    label='Data de nascimento'
                    name='nascimento'
                    type='date'
                    onChange={event => setForm({ ...form, nascimento: event.currentTarget.value })}
                />
                <Input
                    value={form.cor}
                    label='Qual sua cor favorita?'
                    name='cor'
                    type='color'
                    onChange={event => setForm({ ...form, cor: event.currentTarget.value })}
                />
                {/* <label>Nome:
                    <input type="text" placeholder='Digite seu nome:' />
                </label>
                <label>Sobrenome:
                    <input type="text" placeholder='Digite seu sobrenome:' />
                </label>
                <label>E-mail:
                    <input type="text" placeholder='Digite seu email:' />
                </label>
                <label>Celular:
                    <input type="text" placeholder='(XX) XXXXX-XXXX' />
                </label>
                <label>Senha:
                    <input type="text" placeholder='Digite sua senha:' />
                </label> */}
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