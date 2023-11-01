export function handleLogin(form) {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:3000/users?email=${form.email}`
      );

      const data = await res.json();
      console.log(data, "<<<<<here", data[0].email, data[0].password);

      if (data === undefined || data[0].password !== form.password) {
        throw new Error("Invalid email or password");
      }

      localStorage.setItem("access_token", data[0].email);
    } catch (error) {
      console.log(error.message);
    }
  };
}
