// src/utils/api.js
const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem("authToken");

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    window.location.href = "/login"; // Redirect to login if token is invalid
  }

  return response.json();
};

export default apiFetch;
