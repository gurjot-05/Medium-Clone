import { ChangeEvent } from "react";

interface InputBoxProps {
    type: string;
    label: string;
    placeHolder: string
    onChanging: (e: ChangeEvent<HTMLInputElement>) => void
}
export const InputBox = ({ type, label, placeHolder, onChanging }: InputBoxProps) => {
    return (
        <form>
            <label className="block py-2">
                <span className="block text-md font-extrabold text-slate-950 py-1">{label}</span>
                <input type={type} placeholder={placeHolder} onChange={onChanging} className="peer ... border-2 shadow-sm px-3 py-2 w-full rounded-md font-medium text-slate-500" />
            </label>
        </form>
    );
}
