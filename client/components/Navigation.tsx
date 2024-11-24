import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useBasket } from '@hooks/use-basket'
import logo from '../assets/pop-toy-logo.png'
import basket from '../assets/basket.svg'

export default function Navigation() {
  const { user, isLoading, isAuthenticated, logout, loginWithRedirect } =
    useAuth0()

  return (
    <nav className="bg-slate-50 text-slate-600 flex items-center gap-4 container mx-auto my-2 px-3 h-12 rounded-md">
      <Link to="/">
        <img src={logo} alt="" width={145} />
      </Link>
      <Link className="hover:underline" to="products">
        All Products
      </Link>
      <Link className="hover:underline" to="/categories/toys">
        Toys
      </Link>
      <Link className="hover:underline" to="/categories/blind-bags">
        Blind Bags
      </Link>
      <span className="ml-auto flex items-cente text-slate-600">
        {isAuthenticated ? (
          <span>
            Hi, {user?.name}!
            <button
              hidden={isLoading}
              className="ml-2 hover:underline"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Sign Out
            </button>
          </span>
        ) : (
          <button
            hidden={isLoading}
            className="hover:underline"
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </button>
        )}
        <Link
          className="ml-4 relative flex items-center justify-center"
          to="/basket"
        >
          <img src={basket} alt="" width={26} />
          <BusketCount />
        </Link>
      </span>
    </nav>
  )
}

function BusketCount() {
  const basket = useBasket()
  if (basket.length === 0) return null

  return (
    <p className="absolute -top-2 -right-2 size-5 flex justify-center items-center text-[0.7rem] bg-slate-600 text-slate-50 rounded-full">
      {basket.length}
    </p>
  )
}
