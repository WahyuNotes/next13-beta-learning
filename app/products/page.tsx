import AddProduct from "./addProduct"

type Product = {
  id: number
  title: string
  price: number
}

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store", //kalau menggunakan ini maka hasil fetching tidak disimpan dalam cache //getServersideProps
    // next: { revalidate: 10 }, //menggunakan ini biar auto refresh pada waktu tertentu
  })
  return res.json()
}

export default async function ProductList() {
  const products: Product[] = await getProducts()
  return (
    <div className="p-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
