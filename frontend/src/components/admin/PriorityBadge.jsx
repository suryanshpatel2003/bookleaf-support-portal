const PriorityBadge = ({ priority }) => {

  return (
    <span className="bg-red-500 text-white px-3 py-1 rounded">
      {priority}
    </span>
  );
};

export default PriorityBadge;