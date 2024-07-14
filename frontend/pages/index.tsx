import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { startPolling } from '../lib/polling';
import StockTable from '../components/StockTable';
import ChangeSymbolModal from '../components/ChangeSymbolModal';
import styles from '../styles/Home.module.css'; // Import CSS module

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const selectedSymbol = useSelector((state: RootState) => state.data.selectedSymbol);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      startPolling(dispatch, selectedSymbol);
    }
  }, [dispatch, selectedSymbol]);

  return (
    <div className={styles.container}>
      <h1>Real-Time Crypto Prices</h1>
      <button className={styles.changeButton} onClick={() => setModalOpen(true)}>Change Symbol</button>
      <StockTable />
      <ChangeSymbolModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
