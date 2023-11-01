import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav
        aria-label="Global"
        className="bg-white shadow-inner fixed inset-x-0 bottom-0 py-4 border-t-2"
      >
        <ul className="flex items-center justify-center gap-20 text-sm">
          <li>
            <Link
              to="/"
              className="text-neutral-800 transition hover:text-red-600 items-center justify-center"
            >
              <div>
                <svg
                  className="w-4 h-4 mx-auto mb-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                  />
                </svg>
              </div>
              <p>Home</p>
            </Link>
          </li>

          <li>
            <Link
              to="/promos"
              className="text-neutral-800 transition hover:text-red-600 items-center justify-center"
            >
              <div>
                <svg
                  className="w-4 h-4 mx-auto mb-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  />
                </svg>
              </div>
              <p>Promos</p>
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              className="text-neutral-800 transition hover:text-red-600 items-center justify-center"
            >
              <div>
                <svg
                  className="w-4 h-4 mx-auto mb-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              </div>
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
