/// <reference types="react" />
import "./header.css";
type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    itemsNumber?: number;
    totalPrice?: number;
    language?: {
        [key: number]: string;
    };
    currency?: {
        [key: number]: string;
    };
}
export declare const Header: ({ user, itemsNumber, totalPrice, language, currency, }: HeaderProps) => JSX.Element;
export {};
//# sourceMappingURL=Header.d.ts.map