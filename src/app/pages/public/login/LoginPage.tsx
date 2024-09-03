import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Link } from '../../../shared/components';
import { Utils } from '../../../shared/services';
import { useAuth } from '../../../shared/hooks';
import { LubankLogo } from '../../../assets';

export const LoginPage: React.FC = () => {
    const history = useHistory();
    const { login, isLoading, hasError } = useAuth();

    Utils.setWindowTitle('Login');

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const handlerLogin = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        login(email, password);

    }, [email, password, isLoading, login]);

    return (
        <div className="flex1 degrade flex-content-center flex-items-center">
            <div className="shadow-soft padding-g background-secondary border-radius-soft flex-items-center translate-y">
                <LubankLogo height={80} width={80} />
                <br />
                <p>Olá,</p>
                <b>entre na sua conta!</b>
                <br />
                <form className="display-flex flex-column flex-content-center" onSubmit={handlerLogin}>
                    {hasError && <div className="padding-s border-color-error border-thin border-radius-soft text-center background-error">
                        Erro no login
                    </div>}
                    <br />
                    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Input type="password" placeholder="Senha" value={password} onChange={e => setPasword(e.currentTarget.value)} disabled={isLoading} required />
                    <br />
                    <Button className="background-primary" disabled={isLoading}>Entrar</Button>
                    <br />
                    <Link onClick={!isLoading ? (() => history.push('/signup')) : undefined} disabled={isLoading}>Cadastrar-se</Link>
                </form>
            </div>
        </div>
    );
}
