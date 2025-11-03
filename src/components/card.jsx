const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
    {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
    {children}
  </div>
);

export default Card;
