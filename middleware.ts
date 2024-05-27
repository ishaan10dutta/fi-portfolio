import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isRootRoute = createRouteMatcher(["/(.*)"]);

// export default clerkMiddleware((auth, req) => {
//   if (isRootRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
// //latest clerk doesnt automatically make routes in accessible
