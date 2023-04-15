
import { ItopicComponent } from '../../../services/constants/interfaces/component-schemas';
import './topic-holder.scss';

function TopicHolder (props: ItopicComponent) {
    
    const className = `${
        'topic-holder '
        + (props.max ? `max${props.max} ` : '')
        + (props.className || '')
    }`;

    return (
        <div className='width-100'>
            <div className={className} data-aos='fade-right'>
                <div className='line'></div>
                <h3 className='mb-0 py-3'>{props.children}</h3>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default TopicHolder;