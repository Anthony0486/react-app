export default function Marque ({marqueInfo, onClick}) {
    //state
    // const marqueInfo = props.marqueInfo;
    // const onMarqueDelete = props.onMarqueDelete;

    //comportement

    //render

    return (<li>{marqueInfo.nom}{""}<button onClick={onClick}>X</button></li>);
};