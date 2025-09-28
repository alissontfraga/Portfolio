import { useState } from "react";
import EmailIcon from "../../assets/Svg/EmailIcon";

function CopyEmail() {
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    const email = "alissontfcontato2@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        setMessage("E-mail copiado!");
        setTimeout(() => setMessage(""), 4000);
      })
      .catch((error) => {
        console.error("Erro ao copiar o e-mail:", error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={copyEmail}
        style={{
          display: "inline-flex",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <EmailIcon />
      </button>
      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default CopyEmail;
