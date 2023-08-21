import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

export const FormAct = () => {
  const navigate = useNavigate();
  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });
  console.log(activityData);

  const newActivity = async (user) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/activities`,
        user
      );
      window.alert(data);
      navigate("/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const handleChange = (e) => {
    setActivityData({ ...activityData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newActivity(activityData);
  };

  return (
    <div>
      <form>
        <h1> Subir Actividad </h1>

        <label htmlFor="name"> Nombre </label>
        <input
          type="text"
          name="name"
          value={activityData.name}
          placeholder="nombre..."
          onChange={handleChange}
        ></input>
        <label htmlFor="difficulty"> difficulty </label>
        <input
          type="number"
          name="difficulty"
          value={activityData.difficulty}
          placeholder="difficulty..."
          onChange={handleChange}
          max={5}
          min={1}
        ></input>
        <label htmlFor="duration"> duration </label>
        <input
          type="time"
          name="duration"
          value={activityData.duration}
          placeholder="ingrese su duration..."
          onChange={handleChange}
        ></input>
        {/* <p style={{ color: "white" }}>{errors.duration}</p> */}
        <label htmlFor="season"> season </label>
        {/*        <input
          type="text"
          name="season"
          placeholder="season..."
          value={activityData.season}
          onChange={handleChange}
        ></input> */}
        <select
          name="season"
          value={activityData.season}
          onChange={handleChange}
        >
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </select>
        <label htmlFor="country"> country </label>
        <input
          type="text"
          name="country"
          placeholder="pais..."
          value={activityData.country}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
