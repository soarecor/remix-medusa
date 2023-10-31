import {
    Form,
    Link,
    useActionData,
    useSearchParams,
    useTransition as useNavigation,
} from '@remix-run/react'
import { FaLock, FaUserPlus } from 'react-icons/fa'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import paoBlack from '~/assets/zer0-b.svg'

function AuthForm() {
    const [searchParams] = useSearchParams()
    const navigation = useNavigation()
    const validationErrors = useActionData()

    const authMode = searchParams.get('mode') || 'login'

    const submitBtnCaption = authMode === 'login' ? 'Login' : 'Create User'
    const toggleBtnCaption =
        authMode === 'login' ? 'Create a new user' : 'Log in with existing user'

    const isSubmitting = navigation.state !== 'idle'

    return (
        <Form
            method="post"
            className="grid w-full max-w-sm items-center gap-1.5"
            id="auth-form"
        >
            {/* <div className="icon-img">
        {authMode === "login" ? <FaLock /> : <FaUserPlus />}
      </div> */}
            <img
                className="w-[100px] md:w-[150px] pb-10"
                src={paoBlack}
                alt=""
            />

            <div className="my-4 text-xl font-semibold">
                {authMode === 'login' ? <div>Login</div> : <div>Sign up</div>}
            </div>

            <div className="my-2">
                <p className="mb-4">
                    <label htmlFor="email">Email Address</label>
                    <Input type="email" id="email" name="email" required />
                </p>
                <p className="mt-6">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        minLength={7}
                    />
                </p>
            </div>

            {validationErrors && (
                <ul>
                    {Object.values(validationErrors).map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            <div className="flex flex-col">
                <Button className="mt-5" disabled={isSubmitting}>
                    {isSubmitting ? 'Authenticating...' : submitBtnCaption}
                </Button>
                <Link
                    className="text-center mt-5"
                    to={authMode === 'login' ? '?mode=signup' : '?mode=login'}
                >
                    {toggleBtnCaption}
                </Link>
            </div>
        </Form>
    )
}

export default AuthForm
