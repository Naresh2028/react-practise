export default function Products() {
  const products = [
    { id: 1, name: "Oppo", price: 5100 },
    { id: 2, name: "Shirts", price: 100 },
    { id: 1, name: "Phants", price: 500 },
  ];

  if (!products) {
    return <p>Empty Product</p>;
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>
              Product Name: {product.name}
            </h3>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
