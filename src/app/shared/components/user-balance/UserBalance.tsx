import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { UserBalaceUpdate } from './UserBalaceUpdate';
import { IconHistory } from '../../../assets';
import { Api } from '../../services';

export const UserBalance: React.FC = () => {
    const history = useHistory();

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        Api().get('/balance')
            .then(({ data: { data } }) => {
                setBalance(Number(data.balance));
            });

        /* const subscription =  */UserBalaceUpdate.listen().subscribe(async res => {
            console.log(res)
            Api().get('/balance')
                .then(({ data: { data } }) => {
                    setBalance(Number(data.balance));
                });
        });

        // return subscription.unsubscribe;
    }, []);

    return (
        <div className="padding-m translate-y">
            <p className="opacity-7 text-center" style={{ paddingRight: 150 }}>Seu saldo atual</p>
            <div className="flex-row flex-content-center flex-items-end">
                <h1 className="display-flex text-center flex-items-end padding-s" style={{ fontSize: 14, lineHeight: '16px', fontWeight: 'normal' }}>R$:</h1>
                <h1 className="display-flex text-center" style={{ fontSize: 56, lineHeight: '58px', fontWeight: 'normal' }}>{balance.toFixed(2)}</h1>
                <IconHistory width={32} height={32} className="padding-s cursor-pointer" onClick={() => history.push('/historico')} />
            </div>
            <hr className="border-color-black" />
        </div>
    );
}
