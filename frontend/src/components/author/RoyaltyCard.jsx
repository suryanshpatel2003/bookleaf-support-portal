const RoyaltyCard = ({ amount }) => {

  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-lg font-semibold">
        Total Royalty
      </h2>

      <p className="text-3xl font-bold mt-3">
        ₹{amount}
      </p>

    </div>
  );
};

export default RoyaltyCard;