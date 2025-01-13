export default function Chip(props) {
    return (
        <span className={props.className} style={props.styles}>{props.name}</span>
    )
}