
    const domain = "http://localhost:3000"
  
    //FETCH post //http://localhost:3000/

    //CREATE ACCOUNT
    export const Register = async () => {
      try {
        const response = await fetch (`${domain}/users/signup`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: signUpUsername,
            password: signUpPassword,
          })
        });
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); //check what comes back
        return data;
      } catch (error) {
        throw new Error('API request failed');
      }
    };
  
    //SIGN IN TO EXISTING ACCOUNT
    export const SignIn = async () => {
      try {
        const response = await fetch (`${domain}/users/signin`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: signUpUsername,
            password: signUpPassword,
          })
        });
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);  //check what comes back
        return data;
      } catch (error) {
        throw new Error('API request failed');
      }
    };