const API = {
  API_HOST: "",
  ADMIN_LOGIN: "/api/panel/adminLogin",
  ADDCUSTOMER: "/api/panel/addcustomer",
  GETCUSTOMER: "/api/panel/getcustomer",
  DELETECUSTOMER: "/api/panel/deleteCustomer",
  GETSPEC: "/api/panel/get",
  editCustomer: "/api/panel/editCustomer",
  DOWNLOAD: "/api/panel/download-table",
  SEARCH_CUSTOMERS: "/api/panel/search",
};

if (process.env.NODE_ENV === "development")
  // API["API_HOST"] = "http://localhost:3005";
  API["API_HOST"] = "http://localhost:5000";

if (process.env.NODE_ENV === "production")
  API["API_HOST"] = "https://backend.carvibes.in";

export default API;
