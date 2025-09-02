import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-50 bg-gray-800 text-white p-4 h-screen">
      <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul className="list-none p-0">
          <li className="mb-4">
            <Link href="/admin/adminBoard" className="text-white hover:underline hover:underline-offset-8">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/add-product" className="text-white no-underline hover:underline hover:underline-offset-8">
              Add Product
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/login" className="text-white no-underline hover:underline hover:underline-offset-8">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
