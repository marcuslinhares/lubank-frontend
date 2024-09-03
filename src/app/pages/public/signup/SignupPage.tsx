import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Link } from '../../../shared/components';
import { Utils } from '../../../shared/services';
import { useAuth } from '../../../shared/hooks';
import { LubankLogo } from '../../../assets';

export const SignupPage: React.FC = () => {
    const history = useHistory();
    const { signup, isLoading, hasError } = useAuth();

    Utils.setWindowTitle('Cadastro');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [passwordAgain, setPaswordAgain] = useState('');

    const [hasPasswordNotEqual, setHasPasswordNotEqual] = useState(false);

    const handlerSignup = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        setHasPasswordNotEqual(false);

        if (password !== passwordAgain) {
            setHasPasswordNotEqual(true);
            return;
        }

        signup(name, email, password);

    }, [name, email, password, passwordAgain, isLoading, setHasPasswordNotEqual, signup]);

    return (
        <div className="flex1 degrade flex-content-center flex-items-center">
            <div className="shadow-soft padding-g background-secondary border-radius-soft flex-items-center translate-y">
                <LubankLogo height={80} width={80} />
                <br />
                <p>Bem-vindo,</p>
                <b>crie sua conta!</b>
                <br />
                <form className="display-flex flex-column flex-content-center" onSubmit={handlerSignup}>
                    {hasError && <div className="padding-s border-color-error border-thin border-radius-soft text-center background-error">
                        Erro no cadastro
                    </div>}
                    {hasPasswordNotEqual && <div className="padding-s border-color-error border-thin border-radius-soft text-center background-error">
                        As senhas precisam ser iguais
                    </div>}
                    <br />
                    <Input type="text" placeholder="Seu nome completo" value={name} onChange={e => setName(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Input type="email" placeholder="Seu email" value={email} onChange={e => setEmail(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Input type="password" placeholder="Nova senha" value={password} onChange={e => setPasword(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Input type="password" placeholder="Repita a senha" value={passwordAgain} onChange={e => setPaswordAgain(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Button className="background-primary" disabled={isLoading}>Cadastrar</Button>
                    <br />
                    <Link onClick={!isLoading ? (() => history.push('/sign')) : undefined} disabled={isLoading}>Já tenho uma conta</Link>
                </form>
            </div>
        </div>
    );
}
