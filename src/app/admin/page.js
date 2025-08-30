import Link from "next/link";

const Admin = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <aside className="w-50 bg-gray-800 text-white p-4 h-screen">
        <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
        <nav>
          <ul className="list-none p-0">
            <li className="mb-4">
              <Link href="/admin/adminBoard" className="text-white no-underline">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/admin/add-product"
                className="text-white no-underline"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex flex-col justify-center items-center bg-gray-950 h-screen ml-50 mt-[-640]">
        <h1 className="text-2xl mb-4">Welcome, Admin!</h1>
        
        <p className="text-lg text-gray-700">
          Use the sidebar to manage products, view the admin board, and more.
        </p>
      </main>
    </div>
  );
};

export default Admin;
