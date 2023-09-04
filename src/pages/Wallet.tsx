import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import styles from './Login.module.css';

function Wallet() {
  return (
    <div className={ styles.container }>
      <h1>TRYBE WALLET</h1>
      <Header />
      <WalletForm />
      <Table />
    </div>
  );
}

export default Wallet;
