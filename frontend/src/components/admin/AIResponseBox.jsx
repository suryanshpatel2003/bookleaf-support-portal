const AIResponseBox = ({ response }) => {

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">

      <h2 className="text-2xl font-bold mb-4">
        AI Draft Response
      </h2>

      <p>
        {response}
      </p>

    </div>
  );
};

export default AIResponseBox;