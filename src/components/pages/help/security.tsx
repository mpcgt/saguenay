import { Link } from "react-router-dom";
import NavigationBar from "../../features/navbar/navigation";

export default function Security() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 p-6">
        <div className="max-w-2xl w-full bg-zinc-800 rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            Security Policy
          </h1>

          <section className="mb-4">
            <h2 className="text-xl font-semibold text-white">
              Reporting Security Issues
            </h2>
            <p className="text-white mt-2">
              If you have found a security vulnerability, please let us know
              immediately. We will investigate all legitimate reports and do our
              best to resolve the problem quickly.
            </p>
          </section>

          <section className="mb-4">
            <p className="text-white">
              <Link
                to="https://github.com/mpcgt/saguenay/security/advisories/new"
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                Go to this link
              </Link>{" "}
              to report any security issues or send us an e-mail at{" "}
              <Link
                to="mailto:sgn.ntwk@gmail.com"
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                sgn.ntwk@gmail.com
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
