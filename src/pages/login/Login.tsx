import Input from "../../components/Input";

const Login = () => {
  return (
    <div className="bg-blue-600 h-[100vh] flex items-center justify-center p-10">
      <div className="w-full md:w-[450px]">
        <h1 className="text-center text-white font-bold text-4xl md:text-6xl mb-10 ">Login </h1>
        <div className="flex flex-col  gap-3 bg-white p-6 min-h-[150px] rounded-xl drop-shadow-xl ">
           <Input name="email" type="email"  />
           <Input name="password" type="password"  />
           <Input name="confirm-password" type="password"  />
        </div>
      </div>
    </div>
  );
};

export default Login;
