
import { IseparationComponent } from '../../../services/constants/interfaces/component-schemas';
import './separation-line.scss';

function SeparationLine (props: IseparationComponent) {
    
    const className = `${
        'separation-line '
        + (props.stickTop ? 'sl-stick-top ' : '')
        + (props.stickBottom ? 'sl-stick-bottom ' : '')
        + (props.className || '')
    }`;

    return (
        <div className={className}>
            <div></div>
        </div>
    )
}

export default SeparationLine;