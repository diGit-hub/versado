import Header from "@/components/Header";

export default function Login() {
    return (
        <>
            <Header/>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <form className="bg-white shadow-lg rounded-lg px-8 w-90 h-auto m-4">
                    <h2 className="text-2xl font-bold mb-9 mt-9 text-center">Login</h2>
                    
                    <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input id="username" type="text" className="w-full p-2 border rounded mb-4 focus:outline-none focus:border-blue-500"/>

                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input id="password" type="password" className="w-full p-2 border rounded mb-6 focus:outline-none focus:border-blue-500"/>

                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-9 mt-9">Login</button>
                </form>
            </div>
        </>
    );
}