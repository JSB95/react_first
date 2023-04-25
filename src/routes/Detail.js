import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json)
    }
    useEffect(() => {
        if(location.state === null) {
            navigate('/');
        }
    }, []);
    if(location.state) {
        const {title} = location.state;
        return <span>{title}</span>;
    }
    return null;
}
export default Detail;