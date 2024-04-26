const ShoppingItem = (book) => {
  //console.log(book.imageUrl);
  const { imageUrl, name, description } = book.book;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt="Product" className="w-full h-64" />
      <div className="p-4">
        <p className="text-gray-900 font-semibold text-base mb-2 h-6 overflow-hidden">
          {name}
        </p>
        <p className="text-gray-700 text-sm font-medium h-10 overflow-hidden">
          {description}
        </p>
        <p className="text-gray-900 font-semibold text-xl mt-4">$10.99</p>
        <button className="bg-blue-500 text-white text-sm px-2 py-1 mt-2 rounded-md hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingItem;
