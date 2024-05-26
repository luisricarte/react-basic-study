import React, { Component } from 'react';
import './styles.css';

class NewNote extends Component {
    constructor(props){
        super(props);
        this.title="";
        this.description="";
    }

    _handleDigitTitle = (event) => {
        
        event.stopPropagation();
        this.title = event.target.value;
    }
    _handleDigitDescription = (event) => {
        event.stopPropagation();
        this.description = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title,this.description);
    }
    render() {
        return(
            <>
            <form className='form' onSubmit={this._createNote.bind(this)}>
                <h2 style={{fontFamily: 'Roboto', marginBottom: '0'}}>Título</h2>
                <input 
                    type="text"
                    placeholder='Título' 
                    className='titleInput'
                    onChange={this._handleDigitTitle.bind(this)}/>

                <h2 style={{fontFamily: 'Roboto', marginBottom: '0'}}>Descrição</h2>
                <textarea 
                    rows={5} 
                    cols={32} 
                    placeholder='adicione sua descrição' 
                    className='descriptionInput' 
                    onChange={this._handleDigitDescription.bind(this)}></textarea>
                <button className='button'>Adicionar</button>
            </form>
            </>
        )
    }


}

export default NewNote