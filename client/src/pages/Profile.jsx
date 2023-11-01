import { useNavigate } from "react-router-dom";

export default function Profile() {
  const access_token = localStorage.access_token;
  const result = access_token.split("@")[0].replace(/[^a-z]/gi, "");
  const user = result.slice(0, 1).toUpperCase() + result.slice(1);

  const navigate = useNavigate();
  const handleLogout = () => {
    delete localStorage.access_token;
    navigate("/login");
  };

  return (
    <>
      <div className="shadow-md p-4 pt-8 z-10">
        <h1 className="text-2xl font-bold text-red-600">Profile</h1>
      </div>

      <div className="mx-4 pt-6 pb-4">
        <p className="text-neutral-600 text-sm">Username</p>
        <h1 className="text-xl font-medium text-neutral-800">{result}</h1>
      </div>

      <hr className="mx-4" />

      <div className="mx-4 pt-6 pb-4">
        <p className="text-neutral-600 text-sm">Email</p>
        <h1 className="text-xl font-medium text-neutral-800">{access_token}</h1>
      </div>

      <hr className="mx-4" />

      <div className="mx-4 pt-6 pb-4 flex">
        <div className="flex-1">
          <p className="text-neutral-600 text-sm">Password</p>
          <h1 className="text-xl font-medium text-neutral-800">**********</h1>
        </div>
        <a
          class="my-auto inline-block rounded border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
          href=""
        >
          Change
        </a>
      </div>

      <hr className="mx-4" />

      <div className="mx-4 pt-6 pb-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 px-5 py-3 text-sm font-medium text-white rounded-lg mt-4"
        >
          Log out
        </button>
      </div>
    </>
  );
}
