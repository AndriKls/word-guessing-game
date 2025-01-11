export default function Chip(props) {
    const styles = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        padding: '10px',
        fontWeight: 700,
        fontSize: 12,
        lineHeight: '15.64px',
        borderRadius: 4,

    }
    return (
        <span style={styles}>{props.name}</span>
    )
}