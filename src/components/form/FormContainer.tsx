// interface FormContainerProps {
//     children: JSX.Element | JSX.Element[]
//     gap?: number;
//     classNames?: string;
// }
// const FormContainer = ({ classNames = "", gap, children }: FormContainerProps) => {
//     return (
//         <div className={`grid max-sm:col-span-1 max-md:col-span-2 max-lg:col-span-3 max-xl:col-span-4 gap-${!!gap ? gap : 8} ${classNames}`}>{children}</div>
//     )
// }

// export default FormContainer


interface FormContainerProps {
    children: JSX.Element | JSX.Element[];
    gap?: number;
    classNames?: string;
    columns?: number
}
const FormContainer = ({ classNames = "", gap, children, columns }: FormContainerProps) => {
    return (
        <div className="grid grid-cols-12">
            <div className={`col-span-${!!columns ? columns : 4} gap-${!!gap ? gap : 8} ${classNames}`}>{children}</div>
        </div>
    )
}

export default FormContainer
