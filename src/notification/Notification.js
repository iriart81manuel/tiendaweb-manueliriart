import { useState, createContext } from "react";


const Notification = ({ message, severity, classes}) => {

    const notificationStyles = {
      position: 'absolute',
      top: 100,
      right: 10,
      width: 'auto',
      height: 'auto',
      padding: '10px 20px 10px 20px',
      color: 'white',
      backgroundColor: severity === 'success' ? 'green' : 'red'
    }
  
    if(message === '') return

    const config = true ? {
        className: `unaClase ${classes || ''}`,
        style: notificationStyles
    } : {}

    return (
      <div {...config}>
        {message}
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (sev, msg, time = 3) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, time * 1000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity} classes={'otraClase'}/>
            { children }
        </NotificationContext.Provider>
    )
}

export default NotificationContext