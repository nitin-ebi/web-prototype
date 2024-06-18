import {HeadMastBarData} from "./model/HeadMastBarProps.tsx";

function HeadMastBar({linkURLList}: HeadMastBarData) {
    //TODO: proper Icons for all (*fa-solid fa-magnifying-glass)
    return (
        <div className="masthead">
            <ul className="masthead-list">
                {linkURLList.map((item, index) => (
                    <li key={index}>
                        <i className={item.icon}></i>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a></li>
                ))}

                <li>
                    <a href="#">Search</a><i className="fa-solid fa-magnifying-glass"></i>
                </li>

                <li className="ebi-logo-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <div className="headmast-ebi-logo"></div>
                        <span>Hinxton</span>
                    </a>
                    <i className="fa-solid fa-down-triangle"></i>
                </li>
            </ul>
        </div>
    );
}

export default HeadMastBar;