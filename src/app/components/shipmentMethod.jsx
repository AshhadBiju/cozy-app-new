const ShippingMethod = ({ shippingMethod, date, freeOrNot }) => {
  return (
    <div className="flex items-center justify-between border px-6 py-4">
      <label htmlFor="nextDay">
        <div className="flex items-center">
          <input type="radio" name="shipmentMethod" />
          <div className="ml-2 text-base">
            <span className="font-bold  mr-2">{freeOrNot}</span>
            {/** Regular Shipping */}
            {shippingMethod}
          </div>
        </div>
      </label>
      {/**01 Feb, 2023 */}
      <div className="font-bold">{date}</div>
    </div>
  );
};
export default ShippingMethod;
