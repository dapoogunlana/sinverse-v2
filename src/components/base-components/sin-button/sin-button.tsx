
import { IsinButton } from '../../../services/constants/interfaces/component-schemas';
import './sin-button.scss';

function SinButton (props: IsinButton) {

    const styles = {
        padding: 5,
    }

    const clickHolder = () => {}
    
    const className = `${
        'sin-button-case '
        + (props.size ? ('sb-' + props.size) : 'sb-mid')
        + ' ' + (props.tint ? ('sb-' + props.tint) : 'sb-red')
        + ' ' + (props.className || '')
        
    }`;

    return (
        <div className={className} style={{...props.style}} onClick={props.action ? props.action : clickHolder}>
            <div className='bg-spinner'></div>
            <button className='sin-button-case'>{props.children}</button>
        </div>
    )
}

export default SinButton;