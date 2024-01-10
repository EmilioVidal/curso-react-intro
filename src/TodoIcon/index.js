import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG} from './cross.svg'
import { ReactComponent as CheckMSVG } from './checkM.svg'
import { ReactComponent as DeleteTSVG} from './crossR.svg'
import './TodoIcon.css'

const iconTypes = {
    "check": <CheckSVG className='check-svg'/>,
    "checkM": <CheckMSVG className='check-svg'/>,

    "borrarT": <DeleteSVG className='borrarT-svg'/>,
    "borrarTR": <DeleteTSVG className='borrarT-svg'/>,
}

function TodoIcon({ type, onClick }){
    return(
        <span
        className={`${type}`}
        onClick={onClick}
        >
        {iconTypes[type]}
        </span>
    )
}

export { TodoIcon }