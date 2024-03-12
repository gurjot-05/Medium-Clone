import { Link } from "react-router-dom";

interface SubHeadingComponentProps {
    label: string;
    next_route: string;
    link_to: string
}

export const SubHeadingComponent = ({ label, next_route, link_to }: SubHeadingComponentProps) => {
    return (
        <div className="text-center font-semibold text-lg text-slate-500 pt-1 pb-2">
            {label} <Link to={link_to} className="ml-1 hover:cursor-pointer underline">{next_route}</Link>
        </div>
    );
};
