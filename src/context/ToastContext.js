import React, { useCallback, useEffect, useState, createContext } from 'react';
import * as Constants from '../constants';
import { v4 as uuidv4 } from 'uuid';

const ToastContext = createContext();

export default ToastContext;

const ToastsStyles = Constants.ToastsStyles;

export function ToastContextProvider({ children }) {
    
    const [toasts, setToasts] = useState([]);

    useEffect( () => {
        if ( toasts.length > 0 ) {
            const timer = setTimeout(
                () => setToasts( toasts => toasts.slice(1)),
                3000
            );
            return () => clearTimeout( timer );
        }
    }, [toasts]);

    const addToast = useCallback(
        function( toast ) {
            setToasts( toasts => [...toasts, toast]);
        },
        [setToasts]
    );
    
    return (
        <ToastsStyles>
            <ToastContext.Provider value={addToast}>
                {children}
                <div className="notification__container">
                    {
                        toasts.map(toast => (
                            <div className="notification toast fixed-top" key={uuidv4()}>
                                {toast}
                            </div>
                        ))
                    }
                </div>
            </ToastContext.Provider>
        </ToastsStyles>
    );
}
