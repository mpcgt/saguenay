import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
        <button className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Sign Out
        </button>
    )
  )
}
