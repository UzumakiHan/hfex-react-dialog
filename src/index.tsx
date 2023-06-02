
import './index.scss';
import closeIcon from './close-black.png'
interface IProps {
    show: boolean;
    title?:string;
    handleCloseAction: () => void
}
function Dialog(props: IProps) {
    const handleClose = () => {
        props.handleCloseAction()
    }
    return (
        props.show ? <div className='dialog'>
            <div className='dialog-content'>

                <img src={closeIcon} alt="" className='dialog-content-close' onClick={handleClose}/>
                <h1 className='dialog-content-title'>{props.title}</h1>
            </div>
        </div> : <></>
    )
}
export default Dialog;
