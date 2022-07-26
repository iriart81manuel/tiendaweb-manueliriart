import './ItemCount.css';
import {useState} from 'react';

const Counter = ({stock, initial, onAdd}) => {

    //hook de estado
    const [count, setCount] = useState(1);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }
    return(
        <div className='container_father'>
            <div className='count_container'>
                <button disabled={count === initial} className='count_button' onClick={decrement}>-</button>
                <p>{count}</p>
                <button disabled={count === stock} className='count_button' onClick={increment}>+</button>
            </div>
            <button disabled={stock === 0 ? true : null} onClick={() => onAdd(count)} className='cart_button'>Agregar al Carrito</button>
        </div>
    );
}

export default Counter;