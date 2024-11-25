const SellerPage = () => {
  return (
    <div className="py-16 px-8 bg-earthy-beige">
      <h2 className="text-2xl font-bold text-earthy-brown">Seller Dashboard</h2>
      <form className="mt-8 flex flex-col gap-4 bg-earthy-tan p-4 rounded shadow">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Quantity (kg)"
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price per kg"
          className="border p-2 rounded"
        />
        <button className="bg-earthy-brown text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellerPage;
