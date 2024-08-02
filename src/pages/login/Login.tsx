const Login = () => {
  return (
    <div className="bg-blue-600 h-[100vh] flex items-center justify-center p-10">
      <div className="w-full md:w-[450px]">
        <h1 className="text-center text-white font-bold text-4xl md:text-6xl mb-10 ">Login </h1>
        <div className="flex flex-col  gap-3 bg-white p-6 min-h-[150px] rounded-xl drop-shadow-xl ">
            <input type="text" className="flex-1 bg-transparent px-3 py-1 border-2 border-gray-300 rounded-full placeholder-gray-300" placeholder="Enter name" />
            <input type="text" className="flex-1 bg-transparent px-3 py-1 border-2 border-gray-300 rounded-full placeholder-gray-300" placeholder="Enter name" />
            <input type="text" className="flex-1 bg-transparent px-3 py-1 border-2 border-gray-300 rounded-full placeholder-gray-300" placeholder="Enter name" />
        </div>
      </div>
    </div>
  );
};

export default Login;
