export default function Status(props) {
    return (
        <div className={props.className}>
            <h3>{props.text1}</h3>
            <p>{props.text2}</p>
        </div>
    )
}