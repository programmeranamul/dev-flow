import React from "react";

import { auth } from "@/auth";

async function SignInPage() {
  const session = await auth();

  console.log("session", session);

  return <div>SignIn Page</div>;
}

export default SignInPage;
