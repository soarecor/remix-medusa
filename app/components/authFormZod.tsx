// import { ValidatedForm } from "remix-validated-form";
// import { withZod } from "@remix-validated-form/with-zod";
// import { z } from "zod";
// import { FormInput } from "~/components/formInput";
// import { FormSubmit } from "~/components/formSubmit";

// export const validator = withZod(
//   z.object({
//     email: z
//       .string()
//       .min(1, { message: "Email is required" })
//       .email("Must be a valid email"),
//     password: z
//       .string()
//       .min(8, { message: "Password should be minimum 8 characters" }),
//   })
// );

// export default function loginForm() {
//   return (
//     <ValidatedForm validator={validator} method="post">
//       <FormInput name="email" label="email" />
//       <FormInput name="password" label="Password" />
//       <FormSubmit />
//     </ValidatedForm>
//   );
// }
