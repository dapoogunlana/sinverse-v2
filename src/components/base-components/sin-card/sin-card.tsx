
import { IsinCard } from '../../../services/constants/interfaces/component-schemas';
import './sin-card.scss';

function SinCard (props: IsinCard) {

    const style: any = {}
    props.width ? style.width = props.width : console.log();

    return (
        <div className={'sin-card-case ' + (props.className || '')} style={style}>
            <div className={'sin-card' + (props.dark ? ' dark' : '')}>
                {props.children}
            </div>
        </div>
    )
}

export default SinCard;