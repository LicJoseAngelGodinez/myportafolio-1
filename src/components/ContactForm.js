import React, { useState } from 'react';
import Button from '../components/Buttons';
import * as Constants from '../constants';
import { db } from '../components/Firebase';

const FormStyles = Constants.FormStyles;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loader, setLoader] = useState(false);

    const handleSubmit = ( evt ) => {
        evt.preventDefault();
        setLoader(true);

        const params = {
            name: name,
            email: email,
            message: message,
        };

        db.collection('contactos')
        .add(params)
        .then( () => {
            setLoader(false);
        })
        .catch( (error) => {
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <FormStyles onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Tu nombre
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            maxLength="50"
                            onChange={
                                (evt) => setName(evt.target.value)
                            }    
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Tu correo
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            maxLength="100"
                            onChange={
                                (evt) => setEmail(evt.target.value)
                            }    
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Tu mensaje
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={
                                (evt) => setMessage(evt.target.value)
                            }    
                        />
                    </label>
                </div>
                <button type="submit" className="button" disabled={loader}>Enviar</button>
            </FormStyles>
        </div>
    )
}
