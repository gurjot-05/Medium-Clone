interface HeadingComponentProps {
    label: string
}
export const HeadingComponent = ({ label }: HeadingComponentProps) => {
    return (
        <div className="text-center font-bold text-4xl text-slate-950 py-2">
            {label}
        </div>
    );
}
