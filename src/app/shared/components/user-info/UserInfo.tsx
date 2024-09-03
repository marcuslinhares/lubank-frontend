import React from 'react';

import { useAuth } from '../../hooks';
import { IconExit } from '../../../assets';

export const UserInfo: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <div className="text-secondary flex-row flex-items-center">
            {user.name}
            <IconExit className="margin-left-s cursor-pointer" height={18} width={18} onClick={logout} />
        </div>
    );
}
