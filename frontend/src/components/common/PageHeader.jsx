const PageHeader = ({ title }) => {

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;