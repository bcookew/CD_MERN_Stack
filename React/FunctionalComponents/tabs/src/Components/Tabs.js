import React, {useState} from 'react';

const Tabs = props => {
    const pointer = {cursor:"default"}
    const [active, setActive] = useState(0);
    return(
        <div className="col-6">
            <ul style={pointer} className="nav nav-tabs">
                {props.tabList.map((tab, idx) => 
                    <li key={"li-" + idx} className="nav-item">
                        <a key={"a-" + idx} className={idx===active ? "nav-link active":"nav-link"} onClick={() => setActive(idx)}>{tab.label}</a>
                    </li>
                )}
            </ul>
            <div className="row">
                <div className="col text-start">
                    <p>{props.tabList[active].content}</p>
                </div>
            </div>
        </div>
    )
};

export default Tabs;