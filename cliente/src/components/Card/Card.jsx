import { useDispatch, useSelector } from "react-redux"

export const Card = (props) => {
/*     const countries = useSelector((state) => {state.countries})

    const dispatch = useDispatch() */
    return (
        <div>
            <img src={props.flags} alt="" />
            <h2>{props.name}</h2>
            <p>{props.id}</p>
            <p>{props.continent}</p>
            <p>{props.capital}</p>
            <p>{props.subRegion}</p>
            <p>{props.area}</p>
            <p>{props.population}</p>
            <p>{props.Activities}</p>
        </div>
    )
}