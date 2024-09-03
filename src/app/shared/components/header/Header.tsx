import React from 'react';
import { useHistory } from 'react-router-dom';

import { LubankLogoName } from '../../../assets';
import { UserInfo } from '../user-info/UserInfo';

export const Header: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <div className="background-primary padding-m flex-items-center">
                <div style={{ height: 25 }} className="full-width flex-row flex-space-between flex-items-center" />
            </div>
            <div className="background-primary padding-m flex-items-center fixed full-width" style={{ zIndex: 10 }}>
                <div style={{ maxWidth: 720 }} className="full-width flex-row flex-space-between flex-items-center">
                    <LubankLogoName width={121} height={25} onClick={() => history.push('/')} className="cursor-pointer" />
                    <UserInfo />
                </div>
            </div>
        </>
    );
}
