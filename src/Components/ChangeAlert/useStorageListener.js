import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onStorageChange = (event) => {
      if (event.key === "TODOS_V1") {
        console.log("Storage change detected!", event);
        setStorageChange(true);
      }
    };

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  const toggleShow = () => {
    setTimeout(() => {
      sincronize();
      setStorageChange(false);
    }, 2000);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
