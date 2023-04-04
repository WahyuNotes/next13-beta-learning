"use client"
import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/navigation"

export default function AddProduct() {
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
      }),
    })
    setTitle("")
    setPrice("")
    router.refresh()
    setModal(false)
    setIsLoading(false)
  }

  const handleChange = () => {
    setModal(!modal)
  }
  return (
    <div>
      <button className="btn" onClick={() => setModal(!modal)}>
        Add New
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-large">Add New Product</h3>
          <form>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                className="input w-full input-bordered"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"
                className="input w-full input-bordered"
                placeholder="Price"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {isLoading ? (
                <button
                  type="button"
                  className="btn cursor-not-allowed btn-primary"
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="button"
                  onClick={(e) => {
                    setIsLoading(true)
                    handleSubmit(e)
                  }}
                  className="btn btn-primary"
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
