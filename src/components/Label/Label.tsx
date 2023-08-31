
interface LabelProps {
    children: string;
    required: boolean | undefined
}
const Label = ({ children, required }: LabelProps) => {
    return (
        <div className="flex items-center">
            <p className="text-base font-medium text-slate-500">{children}</p>
            <span>{required ? <span className="ml-1 text-2xl text-emerald-600">*</span> : null}</span>
        </div>
    )
}

export default Label