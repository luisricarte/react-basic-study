import React, { Component } from "react";
import styles from './styles.css';
import NewNote from '../../Components/NewNote/index';
import Note from '../../Components/Note/index';
class IndexPage extends Component {

    createNote(title, description) {
        console.log(title, description)
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
                        {Array.of(1,1,1).map((card,index) => {
                            return(
                                <Note title={'Título de teste!'} description={'uma breve descrição que poderia ser adicionada ao card, entende?'}/>
                            )
                        })}
                        
                    </div>
            </section>
        )
    }

}

export default IndexPage;