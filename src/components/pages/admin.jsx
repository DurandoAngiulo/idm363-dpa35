import Layout from "../Layouts/layout.jsx";
import Header from "../Header/header.jsx";
import AdminScreen from "../AdminScreen/adminScreen.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { useContext, useState } from "react";
import StateContext from "../../store.jsx";
import Footer from "../Footer/footer.jsx";

const Admin = () => {
  const state = useContext(StateContext);

  return (
    <>
      <Layout>
        <div className="container top-spacer">
          <Header className="" white="Admin" red="Screen" />
          <AdminScreen />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Admin;
