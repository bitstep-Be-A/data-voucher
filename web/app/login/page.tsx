import { notFound } from "next/navigation";

import {
  LoginForm,
  FindCredentialIdForm,
  FindCredentialPwForm
} from "./form";
import LoginProvider from "./provider";

export default function LoginPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const find = searchParams?.find;

  let Form: JSX.Element;

  if (!find) {
    Form = <LoginForm />;
  }
  else if (find === 'id') {
    Form = <FindCredentialIdForm />
  }
  else if (find === 'pw') {
    Form = <FindCredentialPwForm />
  }
  else { notFound(); }

  return (
    <LoginProvider>
      { Form }
    </LoginProvider>
  );
}
