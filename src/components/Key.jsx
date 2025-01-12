export default function Key(props) {
    return (
        <button onClick={props.onClick} className={props.className}>{props.letter}</button>
    )
}