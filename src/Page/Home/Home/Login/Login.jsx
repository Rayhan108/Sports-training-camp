

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
          </form>
        </div>
      </div>
    );
};

export default Login;