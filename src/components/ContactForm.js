import React, { useState } from 'react';
import * as Constants from '../constants';
import { db } from '../components/Firebase';
import { format } from 'date-fns';
import ContactInfoItem from './ContactInfoItem';
import { MdCheck, MdError, MdInfo, MdSend, MdTagFaces, MdWarning } from 'react-icons/md';

const FormStyles = Constants.FormStyles;
const ContactSectionStyle = Constants.ContactSectionStyle;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [extraClass, setExtraClass] = useState('');
    const [icon, setIcon] = useState(<MdCheck />);

    const [loader, setLoader] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = ( evt ) => {
        evt.preventDefault();
        setText('Enviando mensaje');
        setIcon(<MdSend />);
        setExtraClass('contact__toast contact__info');
        setShowMsg(true);
        setLoader(true);
        setShowForm(false);
        
        if ( name != '' && email != '' && message != '' ) {

            setShowForm(false);

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
                setText('Mensaje enviado');
                setShowMsg(true);
                setIcon(<MdCheck />);
                setExtraClass('contact__toast contact__success');
                toggleElements(2, name);
            })
            .catch( (error) => {
                setLoader(false);
                setText('Ocurrió un error intentar más tarde');
                setIcon(<MdError />);
                setExtraClass('contact__toast contact__error');
                setShowMsg(true);
                toggleElements(1);
            });
    
            setName("");
            setEmail("");
            setMessage("");

        } else {
            setText('Debe llenar todos los campos');
            setIcon(<MdWarning />);
            setExtraClass('contact__toast contact__warning');
            setLoader(false);
            toggleElements(1);
        }

    };
    
    function toggleElements ( __case, __name ) {

        let __showForm = false,
            __showMsg = false,
            __icon = <MdInfo />,
            __class = '',
            __text = '';

        if ( __case === 1 ) {

            __showForm = true;
            __showMsg = false;
            __icon = <MdInfo />;
            __text = '';

        } else if ( __case === 2 ) {

            __showForm = false;
            __showMsg = true;
            __class = 'contact__toast contact__smile';
            __icon = <MdTagFaces />;
            __text = `Gracias ${__name}, por contactar!`;

        }

        setTimeout( function() {
            setShowForm(__showForm);
            setShowMsg(__showMsg);
            setExtraClass(__class);
            setIcon(__icon);
            setText(__text);
        }, 3000);

    };

    return (
        <div>
            <ContactSectionStyle className={ showMsg ? "" : "element__hidden"}>
                <ContactInfoItem
                    extraClass={ showMsg ? extraClass : "element__hidden"}
                    icon={icon}
                    text={text}
                />
            </ContactSectionStyle>
            <FormStyles onSubmit={handleSubmit} className={ showForm ? "" : "element__hidden"}>
                <div className="form-group">
                    <label htmlFor="name">Nombre
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
                    <label htmlFor="email">Email
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
                    <label htmlFor="message">Mensaje
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
