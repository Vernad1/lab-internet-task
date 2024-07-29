import.meta.env.VITE_API_URL;

export const sendForm = async (userData: {
  name: string;
  phoneNumber: number;
}) => {
  try {
    const response = await fetch("http/localhost", {
      body: JSON.stringify(userData),
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Произошла ошибка");
    }
    const data = response.json();
    return data;
  } catch (error) {
    alert(error);
    return error;
  }
};
