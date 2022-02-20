import React from 'react'
import styles from './App.module.css';
import ProfileCard from './Components/Commons/profileCard/ProfileCard';
import ItemCard from './Components/Commons/itemCard/ItemCard';
import TimeTracker from './timeTracker';
import Layout from './Components/Commons/Layout/Layout';

function App() {
  return (
    <Layout >
      <div className={styles.containerCard}>
        <ProfileCard />
        <div className={styles.cards}>
          <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        </div>

        

      </div>
    </Layout>
  );
}

export default App;
