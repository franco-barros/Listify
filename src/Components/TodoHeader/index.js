import React from "react";

function TodoHeader({ children, loading }) {
  return (
    <header>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { loading })
      )}
    </header>
  );
}

export { TodoHeader };
