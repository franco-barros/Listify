import React, { useState } from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize, onCancel }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  const [shouldShow, setShouldShow] = useState(true);

  const handleCancel = () => {
    setShouldShow(false);
    onCancel();
  };

  if (show && shouldShow) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tu lista en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tu lista?</p>
          <button className="sincronizar" onClick={toggleShow}>
            Sí, sincroniza
          </button>
          <button className="cancelar" onClick={handleCancel}>
            No sincroniza
          </button>
        </div>
      </div>
    );
  } else {
    return null; // Si no hubo cambios, no mostramos la alerta
  }
}

export { ChangeAlert };
