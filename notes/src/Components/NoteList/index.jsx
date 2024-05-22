import React from 'react';
import './styles.css';

const ListNote = () => {
    return(
        <>
        <form className='form'>
            <h2 style={{fontFamily: 'Roboto', marginBottom: '0'}}>Título</h2>
            <input type="text" placeholder='Título' className='titleInput'/>
            <h2 style={{fontFamily: 'Roboto', marginBottom: '0'}}>Descrição</h2>
            <textarea rows={5} cols={32} placeholder='adicione sua descrição'
                            style={{
                                backgroundColor:'#bdbdbd', 
                                borderRadius: '1rem', 
                                border: 0, 
                                paddingLeft:'1rem', 
                                paddingTop:'0.5rem', 
                                paddingBottom:'0.5rem',
                                }}></textarea>
            <button style={{}} >Adicionar</button>
        </form>
        </>
    )

}

export default ListNote