import './index.scss';
import closeIcon from './close-black.png';
interface IProps {
    show: boolean;
    title?: string;
    handleCloseAction: () => void;
}
function dialog(props: IProps) {
    const {handleCloseAction, title, show} = props;
    return show ? (
        <div className="dialog">
            <div className="dialog-content">
                <img
                    alt=""
                    className="dialog-content-close"
                    onClick={handleCloseAction}
                    src={closeIcon}
                />
                <h1 className="dialog-content-title">{title}</h1>
            </div>
        </div>
    ) : null;
}
export default dialog;
