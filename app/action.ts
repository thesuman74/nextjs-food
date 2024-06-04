// action.ts
export const LoginAction = async (username: string, password: string) => {
  const datas = {
    username: username,
    password: password,
  };

  try {
    const loginResponse = await fetch(
      "https://apiuser.moretechglobal.com/api/auth/login/",
      {
        method: "POST",
        body: JSON.stringify(datas),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!loginResponse.ok) {
      throw new Error("Failed to submit form");
    }

    const loginData = await loginResponse.json();

    const userDetailsResponse = await fetch(
      "https://apiuser.moretechglobal.com/api/auth/user/all/details/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${loginData.key}`,
        },
      }
    );

    if (!userDetailsResponse.ok) {
      throw new Error("Failed to retrieve user details");
    }

    const userDetails = await userDetailsResponse.json();
    return { ...userDetails, token: loginData.key };
  } catch (error) {
    console.error("Error while logging in:", error);
    throw error;
  }
};
