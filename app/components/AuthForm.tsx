import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useTransition as useNavigation,
} from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const validationErrors = useActionData();

  const authMode = searchParams.get("mode") || "login";

  const submitBtnCaption = authMode === "login" ? "Login" : "Create User";
  const toggleBtnCaption =
    authMode === "login" ? "Create a new user" : "Log in with existing user";

  const isSubmitting = navigation.state !== "idle";

  return (
    <Form
      method="post"
      className="grid w-full max-w-sm items-center gap-1.5"
      id="auth-form"
    >
      <div className="icon-img">
        {authMode === "login" ? <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <Input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" name="password" minLength={7} />
      </p>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Authenticating..." : submitBtnCaption}
        </Button>
        <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
          {toggleBtnCaption}
        </Link>
      </div>
    </Form>
  );
}

export default AuthForm;
