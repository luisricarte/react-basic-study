import React from "react";
import styles from './styles.css';
import ListNote from '../../Components/NoteList/index';
import Note from '../../Components/Note/index';

export const IndexPage = () => {
    return (
        <div className={styles.container}>
            <div>
                <ListNote/>
            </div>
            <div style={{width:'100%', border:'3px solid #bdbdbd', borderRadius: '8px', marginTop:'1rem'}}></div>
            <div style={{paddingLeft: '2rem'}}>
                <h1 style={{fontFamily:'Roboto',fontWeight: '400',fontSize: '38px'}}>
                    Lista de Notas
                </h1>
                <Note/>
            </div>
        </div>
    )
}