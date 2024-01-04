export const DisplayProducts = ({ products }) => {
  return (
    <div className="text-gray-600">
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
};
