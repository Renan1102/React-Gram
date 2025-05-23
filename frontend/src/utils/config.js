export const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://react-gram-backend-git-master-renan-de-souzas-projects.vercel.app/api";
export const uploads = "http://localhost:5000/uploads";

export const requestConfig = (method, data, token = null, image) => {
  let config;

  if (image) {
    config = {
      method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = { method, headers: {} };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
