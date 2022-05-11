import { useParams } from "react-router-dom";
    
const Location = (props) => {
    const { city } = useParams();
        
    return (
        <h1>Welcome to { city }!</h1>
    );
}

export default Location;