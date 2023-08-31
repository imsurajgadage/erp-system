interface ButtonProps {
    label: string;
    variant: "default" | "disabled";
    type: "button" | "submit" | "reset"
    disabled?: boolean
    classNames?: string
}
const Button = ({ label, variant, type, disabled, classNames = "" }: ButtonProps) => {
    let style = ''
    if (variant == "default") {
        style = "text-white bg-blue-600"
    }
    if (variant == "disabled") {
        style = "text-white bg-gray-200 text-gray-400"
    }
    return (
        <button className={`p-1 rounded ${classNames} h-10 ${style}`} type={type} disabled={disabled}>
            {label}
        </button>
    )
}

export default Button