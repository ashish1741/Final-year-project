import axois from "axios";

// make API Request

// aunthicated fucnction

//getuser

export async function getUser({ username }) {
  try {
    const { data } = await axois.get(`/api/user/${username}`);
    return { data };
  } catch (error) {
    return { error: "password doesn't match" };
  }
}

// register user function

export async function signUp(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axois.post(`/api/signUp`, credentials);

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

//login

export async function signIn(email, password) {
  try {
    if (email) {
      const { data } = await axois.post(`/api/signIn`, { email, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "password doesn't match....!" });
  }
}

//update user

export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axois.put(`/api/updateuser`, response, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "couldn't update user " });
  }
}

//resetPassword 

// export  async function resetPassword(){
//     try {
//         const 
        
//     } catch (error) {
//     return Promise.reject({ error: "couldn't reset password " });

        
//     }

// }