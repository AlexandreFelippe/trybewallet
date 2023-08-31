import { WalletType } from '../../types';

type LoginType = {
  email: string;
};

export const SUBMIT_USER = 'SUBMIT_USER';
export const SUBMIT_WALLET = 'SUBMIT_WALLET';

export const submitUser = (email: string) => ({
  type: SUBMIT_USER,
  payload: email,
});

export const submitProfessionalData = (wallet: WalletType) => ({
  type: SUBMIT_WALLET,
  payload: wallet,
});
