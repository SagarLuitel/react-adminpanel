import "./subscriberwidget.css"
import {Email,  Event} from '@mui/icons-material';

export const SubscriberWidget = () => {
    return (
        <div className="subscriberWidget">
            <h5> New Subscribers in Last 7 days</h5>
            <div className="subscriberDetai">
                <span className="subscriberList"><Email className="subsIcon"/> luitelsgr@gmail.com</span>
                <span className="subscriberList"><Event className="subsIcon"/> 12-01-2021</span>
            </div>

            <div className="subscriberDetai">
                <span className="subscriberList"><Email className="subsIcon"/> luitelsgr@gmail.com</span>
                <span className="subscriberList"><Event className="subsIcon"/> 12-01-2021</span>
            </div>

            <div className="subscriberDetai">
                <span className="subscriberList"><Email className="subsIcon"/> luitelsgr@gmail.com</span>
                <span className="subscriberList"><Event className="subsIcon"/> 12-01-2021</span>
            </div>
            
        </div>
    )
}
