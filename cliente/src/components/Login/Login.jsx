const { useState } = require("react");
const { useNavigate } = require("react-router-dom");

const navigate = useNavigate()
const [access, setAccess] = useState(false);

const login = async ({ email, password }) => {
  try {
    const { data } = await axios(
      `http://localhost:3001/user?email=${email}&password=${password}`
    );
    console.log("la datarda ---> ", data);
    const { access } = data;
    console.log("el acceso ---> ", access);
    access === true && alert("Login exitoso");
    setAccess(access);
    access && navigate("/home");
  } catch (error) {
    window.alert('coso');
  }
};

module.exports = login