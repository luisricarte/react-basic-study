import React from 'react';
import './styles.css';

const ListNote = () => {
    return(
        <>
        <form className='form'>
            <h2 style={{fontFamily: 'Roboto', marginBottom: '0'}}>Título</h2>
            <input type="text" placeholder='Título' className='titleInput'/>
            <h2 style={{fontFamily: 'Roboto', marginBottom: '0'}}>Descrição</h2>
            <textarea rows={5} cols={32} placeholder='adicione sua descrição' className='descriptionInput'></textarea>
            <button className='button'>Adicionar</button>
        </form>
        </>
    )

}

export default ListNote