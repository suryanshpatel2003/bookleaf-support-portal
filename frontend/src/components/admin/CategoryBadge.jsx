const CategoryBadge = ({ category }) => {
  return (
    <span className="inline-block text-xs font-semibold bg-slate-800/60 border border-slate-700/40 text-slate-300 px-2.5 py-1 rounded-md tracking-wide">
      {category}
    </span>
  );
};

export default CategoryBadge;