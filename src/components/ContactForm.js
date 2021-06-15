import React, { useState } from 'react';
import Button from '../components/Buttons';
import * as Constants from '../constants';
import { db } from '../components/Firebase';
import useToastContext from '../context/UseToastContext';
import { format } from 'date-fns';

const FormStyles = Constants.FormStyles;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loader, setLoader] = useState(false);

    const [text, setText] = useState('');
    const addToast = useToastContext();

    const handleSubmit = ( evt ) => {
        evt.preventDefault();
        setLoader(true);

        let dateNow = new Date();

        const params = {
            timeStamp: format(dateNow, 'dd/MM/yyyy kk:mm:ss'),
            registerDate: format(dateNow, 'dd/MM/yyyy'),
            registerHour: format(dateNow, 'kk:mm:ss'),
            name: name,
            email: email,
            message: message,
        };

        db.collection('contactos')
        .add(params)
        .then( () => {
            setLoader(false);
            handleClick('Mensaje enviado');
        })
        .catch( (error) => {
            setLoader(false);
            handleClick('Intente de nuevo más tarde')
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    function handleClick( text ) {
        addToast(text);
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
