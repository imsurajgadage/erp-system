interface FormSectionProps {
    children: JSX.Element
    classNames?: string;
}

const FormSection = ({ children, classNames = "" }: FormSectionProps) => {
    return (
        <div className={`w-full ${classNames}`}>{children}</div>
    );
}

export default FormSection