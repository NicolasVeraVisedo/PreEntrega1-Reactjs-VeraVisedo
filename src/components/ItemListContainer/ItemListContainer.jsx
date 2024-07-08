import "./ItemListContainer.scss";

const ItemListContainer = ({ saludo1, saludo2 }) => {
  return (
    <div className="itemlistcontainer">
      <h1> {saludo1}</h1>
      <h2>{saludo2}</h2>
    </div>
  );
};

export default ItemListContainer;
