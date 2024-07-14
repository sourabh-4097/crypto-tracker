import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from '../styles/StockTable.module.css'; // Import CSS module

const StockTable: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const data = useSelector((state: RootState) => state.data.data);
  const selectedSymbol = useSelector((state: RootState) => state.data.selectedSymbol);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.stockTable}>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Symbol</th>
            <th>Timestamp</th>
            <th>Price (USD)</th>
            <th>Volume (USD)</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((entry) => entry.symbol === selectedSymbol)
            .map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.symbol}</td>
                <td>{new Date(entry.timestamp).toLocaleTimeString()}</td>
                <td>{entry.price}</td>
                <td>{entry.volume}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
