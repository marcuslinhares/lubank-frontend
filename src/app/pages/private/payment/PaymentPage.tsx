import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Section, Input, Button } from '../../../shared/components';
import { Utils, Api } from '../../../shared/services';

export const PaymentPage: React.FC = () => {
    const history = useHistory();

    Utils.setWindowTitle('Pagamento');

    const [billetNumber, setBilletNumber] = useState('');

    const [newBillet, setNewBillet] = useState({
        code: '',
        value: '',
        favored: '',
    });

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`/pagamento/${billetNumber}`)
    }, [billetNumber, history]);

    const handleNewBillet = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        Api()
            .post('/billet', newBillet, { timeout: 5000 })
            .then(() => {
                setNewBillet({ code: '', favored: '', value: '' });
                alert('Seu boleto foi gerado!');
            })
            .catch(e => {
                alert('Erro ao gerar o boleto.');
            });
    }, [newBillet]);

    return (<>
        <div className="padding-m translate-y" style={{ animationDuration: '.2s' }}>
            <Section title="Pagamento">
                <form onSubmit={handleSubmit}>
                    <label className="margin-bottom-xs opacity-7" htmlFor="bars-code">Código de barras do boleto</label>
                    <div className="flex-row">
                        <Input id="bars-code" type="number" value={billetNumber} onChange={e => setBilletNumber(e.currentTarget.value)} className="border-thin-gray" placeholder="Ex: 00000000000000" required />
                    </div>
                    <div className="flex-row flex-content-end">
                        <Button className="background-primary padding-horizontal-xg" disabled={billetNumber.trim().length < 3}>Continuar</Button>
                    </div>
                </form>
            </Section>
        </div>
        <div className="padding-m translate-y" style={{ animationDuration: '.4s' }}>
            <Section title="Gerar um novo boleto">
                <form onSubmit={handleNewBillet}>
                    <div>
                        <label className="margin-bottom-xs opacity-7" htmlFor="new-billet-favored">Nome do favorecido</label>
                        <Input
                            required
                            type="text"
                            id="new-billet-favored"
                            value={newBillet.favored}
                            className="border-thin-gray"
                            placeholder="Ex: João Carlos"
                            onChange={e => setNewBillet({ ...newBillet, favored: e.target.value })}
                        />
                    </div>
                    <div className="flex-row margin-top-g">
                        <div>
                            <label className="margin-bottom-xs opacity-7" htmlFor="new-billet-bars-code">Código de barras do boleto</label>
                            <Input
                                required
                                type="number"
                                value={newBillet.code}
                                id="new-billet-bars-code"
                                className="border-thin-gray"
                                placeholder="Ex: 00000000000000"
                                onChange={e => setNewBillet({ ...newBillet, code: Utils.maskNumero(e.target.value) })}
                            />
                        </div>
                        <div className="margin-left-g">
                            <label className="margin-bottom-xs opacity-7" htmlFor="new-billet-value">Valor do boleto</label>
                            <Input
                                required
                                type="number"
                                id="new-billet-value"
                                placeholder="Ex: 10.00"
                                value={newBillet.value}
                                className="border-thin-gray"
                                onChange={e => setNewBillet({ ...newBillet, value: Utils.maskNumero(e.target.value) })}
                                onBlur={e => setNewBillet({ ...newBillet, value: Utils.maskNumero(Number(e.target.value).toFixed(2)) })}
                            />
                        </div>
                    </div>
                    <div className="flex-row flex-content-end">
                        <Button className="background-primary padding-horizontal-xg margin-top-g" disabled={newBillet.code.trim().length < 3}>Gerar boleto</Button>
                    </div>
                </form>
            </Section>
        </div>
    </>);
}
