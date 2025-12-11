import type { JSX } from "react"
import { Navigate } from "react-router";

interface Props {
  children: JSX.Element
}

function ProtectedRoute({children}: Props) {
  const hasVisitedLanding = sessionStorage.getItem("visitedLanding");

  if(!hasVisitedLanding) {
    return <Navigate to="/" replace />
  }

  return children;
}

export default ProtectedRoute
