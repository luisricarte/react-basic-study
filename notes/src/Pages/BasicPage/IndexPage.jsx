import React from "react";
import styles from './styles.css';
import ListNote from '../../Components/NoteList/index';

export const IndexPage = () => {
    return (
        <div className={styles.container}>
            <div>
                
            </div>
            <div>
                <ListNote/>
            </div>
        </div>
    )
}