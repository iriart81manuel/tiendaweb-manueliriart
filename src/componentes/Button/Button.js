const Button = (props) => {
    return <button onClick={props.handleClick} style={props.style}>{props.children}</button>
}

export default Button