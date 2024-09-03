import React, { useState, useCallback } from 'react';

import { Section, Button, Input } from '../../../shared/components';
import { Api, Utils } from '../../../shared/services';

export const DepositPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');

    Utils.setWindowTitle('Deposito');

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        if (isLoading) return;

        setIsLoading(true);

        Api()
            .post('deposit', { deposit: value }, { timeout: 5000 })
            .then(() => {
                alert('Deposito realizado com sucesso.');
                setIsLoading(false);
                setValue('');
            })
            .catch(() => {
                setIsLoading(false);
                alert('Deposito não realizado.')
            });
    }, [isLoading, value]);

    return (
        <div className="padding-m translate-y">
            <Section title="Deposito">
                <form onSubmit={handleSubmit}>
                    <label className="margin-bottom-xs opacity-7" htmlFor="deposit">Valor que será depositado</label>
                    <div className="flex-row">
                        <Input
                            required
                            type="text"
                            id="deposit"
                            value={value}
                            disabled={isLoading}
                            className="border-thin-gray" placeholder="Ex: 10.00"
                            onChange={e => setValue(Utils.maskNumero(e.target.value))}
                            onBlur={e => setValue(Utils.maskNumero(Number(e.target.value).toFixed(2)))}
                        />
                    </div>
                    <div className="flex-row flex-content-end">
                        <Button className="background-primary padding-horizontal-xg" disabled={isLoading || (Number(value) <= 0)}>Depositar</Button>
                    </div>
                </form>
            </Section>
        </div>
    );
}
