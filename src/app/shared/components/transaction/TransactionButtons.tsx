import React from 'react';
import { useHistory } from 'react-router-dom';

import { IconTransfer, IconDeposit, IconPayment } from '../../../assets';
import { Button } from '../button/Button';

export const TransactionButtons: React.FC = () => {
    const history = useHistory();

    return (
        <div className="padding-m flex-space-between flex-row translate-y" style={{ animationDuration: '.4s' }}>
            <Button onClick={() => history.push('/deposito')} className="background-white display-flex padding-horizontal-g flex-items-center margin-left-g">
                <IconDeposit className="margin-right-s" width={36} />
                Deposito
            </Button>
            <Button onClick={() => history.push('/transferencia')} className="background-white display-flex padding-horizontal-g flex-items-center">
                <IconTransfer className="margin-right-s" width={30} />
                Transferência
            </Button>
            <Button onClick={() => history.push('/pagamento')} className="background-white display-flex padding-horizontal-g flex-items-center margin-right-g" >
                <IconPayment className="margin-right-s" width={30} />
                Pagamento
            </Button>
        </div>
    );
}
