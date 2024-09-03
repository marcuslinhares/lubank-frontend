import React from 'react';

export const Body: React.FC = ({ children }) => {

    return (
        <div style={{ maxWidth: 720, height: 'auto' }} className="full-width padding-m background-secondary shadow-soft translate-y">
            {children}
        </div>
    );
}
