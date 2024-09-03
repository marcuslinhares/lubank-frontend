import React from 'react';

import ImgLubankLogoName from './lubank-logo-name.png';
import ImgIconTransfer from './transfer-icon.png';
import ImgIconNegative from './negative-icon.png';
import ImgIconPositive from './positive-icon.png';
import ImgIconHistory from './history-icon.png';
import ImgIconPayment from './payment-icon.png';
import ImgIconDeposit from './deposit-icon.png';
import ImgLubankLogo from './lubank-logo.png';
import ImgIconExit from './exit-icon.png';


export const LubankLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Logo Lubank" src={ImgLubankLogo} {...props} />;

export const LubankLogoName: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Logo nome Lubank" src={ImgLubankLogoName} {...props} />;

export const IconExit: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Sair do app" src={ImgIconExit} {...props} />;

export const IconHistory: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Histórico" src={ImgIconHistory} {...props} />;

export const IconTransfer: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Histórico" src={ImgIconTransfer} {...props} />;

export const IconPayment: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Histórico" src={ImgIconPayment} {...props} />;

export const IconDeposit: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Histórico" src={ImgIconDeposit} {...props} />;

export const IconNegative: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Histórico" src={ImgIconNegative} {...props} />;

export const IconPositive: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => <img alt="Histórico" src={ImgIconPositive} {...props} />;
