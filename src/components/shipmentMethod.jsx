const ShippingMethod = ({
  shippingMethod = "Standard Shipping",
  date = "N/A",
  freeOrNot = "Free",
}) => {
  return (
    <div className="flex items-center justify-between border px-6 py-4">
      <label className="cursor-pointer">
        <div className="flex items-center">
          <input type="radio" name="shipmentMethod" />
          <div className="ml-2 text-base">
            <span className="font-bold  mr-2">{freeOrNot}</span>
            {shippingMethod}
          </div>
        </div>
      </label>
      <div className="font-bold">{date}</div>
    </div>
  );
};

export default ShippingMethod;
