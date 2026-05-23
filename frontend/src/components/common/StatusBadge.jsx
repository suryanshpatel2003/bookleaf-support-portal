const StatusBadge = ({ status }) => {

  return (
    <span className="bg-black text-white px-3 py-1 rounded">
      {status}
    </span>
  );
};

export default StatusBadge;