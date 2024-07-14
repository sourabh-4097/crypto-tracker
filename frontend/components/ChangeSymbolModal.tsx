import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedSymbol } from '../store/slices/dataSlice';
import styles from '../styles/ChangeSymbolModal.module.css'; // Import CSS module

const ChangeSymbolModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [newSymbol, setNewSymbol] = useState('BTC');
  const dispatch = useDispatch();

  const handleChangeSymbol = () => {
    dispatch(setSelectedSymbol(newSymbol));
    onClose();
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Change Stock/Crypto Symbol</h2>
        <select value={newSymbol} onChange={(e) => setNewSymbol(e.target.value)}>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="SOL">SOL</option>
          <option value="USDT">USDT</option>
          <option value="BNB">BNB</option>
        </select>
        <div className={styles.buttonGroup}>
          <button onClick={handleChangeSymbol}>Change</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeSymbolModal;
