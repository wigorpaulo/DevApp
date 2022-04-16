export default function If(props) {
    if(props.if) {
        return props.children
    } else {
        return false
    }
}