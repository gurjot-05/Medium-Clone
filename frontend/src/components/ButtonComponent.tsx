interface ButtonComponentProps {
    label: string,
    onClicking: (e: any) => void
}
export const ButtonComponent = ({ label, onClicking }: ButtonComponentProps) => {
    return (
        <button onClick={onClicking} className="bg-gray-950 hover:bg-gray-900 bg-gr text-slate-100 text-md font-semibold rounded w-full text-center h-full py-3 my-4">
            {label}
        </button>
    );
}
