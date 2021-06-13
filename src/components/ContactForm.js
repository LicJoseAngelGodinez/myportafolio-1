import React, { useState } from 'react';
import Button from '../components/Buttons';
import * as Constants from '../constants';

const FormStyles = Constants.FormStyles;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <FormStyles>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Tu nombre
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={
                                    evt => setName(evt.target.value)
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
                                onChange={
                                    evt => setEmail(evt.target.value)
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
                                    evt => setMessage(evt.target.value)
                                }    
                            />
                        </label>
                    </div>
                    <Button
                        type="submit"
                        btnText="Enviar"
                    />
                </form>
            </FormStyles>
        </div>
    )
}
