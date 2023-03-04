export default function ButtonTicket({ name, price }) {
  return(
    <button>
      <p>{name}</p>
      <p>R$ {price/100}</p>
    </button>
  );
};
