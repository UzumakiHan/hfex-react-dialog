import './index.scss';
interface IProps {
    show: boolean;
    title?: string;
    handleCloseAction: () => void;
}
declare function dialog(props: IProps): import("react/jsx-runtime").JSX.Element | null;
export default dialog;
