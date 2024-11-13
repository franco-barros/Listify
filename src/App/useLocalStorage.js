import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  // Envuelve la función en useCallback para que no cambie en cada render
  const sincronizeItem = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };

  return { item, saveItem, sincronizeItem, loading, error };
}

export { useLocalStorage };

// localStorage.removeItem('TODO_V1');

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Comprar tomate", completed: false },
//   { text: "Lavar ropa", completed: false },
//   { text: "Comprar leche", completed: true },
//   { text: "Hacer ejercicio", completed: false },
// ];

// localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos));
