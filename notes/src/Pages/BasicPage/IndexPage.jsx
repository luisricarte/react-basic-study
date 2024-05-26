import React, { Component, useState } from "react";
import styles from './styles.css';
import NewNote from '../../Components/NewNote/index';
import Note from '../../Components/Note/index';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.notes = [];
    }
    createNote(title, description) {
        const noteObject = {title:title, description:description}
        console.log(noteObject)
        this.notes?.add(noteObject);
    }

    render() {
        return (
            <section className={styles.container}>
                <div>
                    <NewNote createNote={this.createNote}/>
                </div>
                <div style={{width:'100%', border:'3px solid #bdbdbd', borderRadius: '8px', marginTop:'1rem'}}></div>
                    <div style={{paddingLeft: '2rem'}}>
                        <h1 style={{fontFamily:'Roboto',fontWeight: '400',fontSize: '38px'}}>
                            Lista de Notas
                        </h1>
                        
                        {this.notes?.map((cardNote,index) => {
                            return(
                                <Note title={cardNote.title} description={cardNote.description}/>
                            )
                        })}
                        
                    </div>
            </section>
        )
    }

}

export default IndexPage;