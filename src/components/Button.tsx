interface Props {
    label: string;
    clickHandler?: () => void;
    className?: string;
}

export default function Button(props: Props) {
    return (
        <button
            onClick={props.clickHandler}
            className={`btn ${props.className}`}>
            {props.label}
        </button>
    );
}
