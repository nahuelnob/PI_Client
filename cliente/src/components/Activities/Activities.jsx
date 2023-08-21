import { useDispatch, useSelector } from "react-redux";
import { addActivities } from "../../redux/action/ations";

export const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const handleSeeAll = () => {
    dispatch(addActivities());
  };

  const act = activities.map((actividad) => {
    const { id, name, difficulty, duration, season, Countries } = actividad;
    const pais = Countries.map((pais) => {
      const { name } = pais;
      return <p>{name}</p>;
    });
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{difficulty}</p>
        <p>{duration}</p>
        <p>{season}</p>
        <p>{pais}</p>
      </div>
    );
  });
  return (
    <div>
      <button onClick={handleSeeAll}>buscar</button>
        <div>
            {act}
        </div>
      
    </div>
  );
};
