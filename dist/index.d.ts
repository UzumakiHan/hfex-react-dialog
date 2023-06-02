import * as react_jsx_runtime from 'react/jsx-runtime';

interface IProps {
    show: boolean;
    title?: string;
    handleCloseAction: () => void;
}
declare function dialog(props: IProps): react_jsx_runtime.JSX.Element | null;

export { dialog as default };
