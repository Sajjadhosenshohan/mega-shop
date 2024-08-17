import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { Context } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
  
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";
  const { signIn, loading, signInWithGoogle , setLoading} = useContext(Context)

  const handleSignUp = async (event) => {

    event.preventDefault();
    setLoading(true)
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    // Validation
    if (password.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Please Enter A Password Of At Least 6 Characters",
        });
        return;
    } else if (!/[A-Z]/.test(password)) {
        Swal.fire({
            icon: "error",
            title: "Please Enter A Password Of At Least 1 Uppercase Character",
        });
        return;
    } else if (!/[a-z]/.test(password)) {
        Swal.fire({
            icon: "error",
            title: "Please Enter A Password Of At Least 1 Lowercase Character",
        });
        return;
    }

    try {

      // create user
      await signIn(email, password)
        .then(res => {
          console.log(res?.user)

          toast.success('Successfully login')
          navigate(from)
          setLoading(false)

        })

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  const googleSignUp = async () => {
    await signInWithGoogle()
      .then(result => {
        // console.log(result.user);
        const info = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          profileImage: result.user?.photoURL,
        }

        // console.log(info)

        axiosPublic.post("/users", info)
          .then(res => {
            // console.log(res.data)
            if (res.data.insertedId) {
              toast.success('successfully login')
              navigate(from);
              setLoading(false)
            }
          })
      })
      .catch(error => {
        toast.error(error.message)
        setLoading(false)
      })

  }

  if (loading) return <Spinner />

  return (
    <div className='flex justify-center items-center mt-10'>

      <div className='flex flex-col p-6 rounded-md sm:p-10 bg-white text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-primary'>Login</h1>
        </div>
        <form onSubmit={handleSignUp} className='space-y-6'>
          <div className='grid grid-cols-1  gap-6'>

            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email
              </label>
              <input
                type='email'
                name='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='text'
                name='password'
                autoComplete='new-password'
                required
                placeholder='Enter your password'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button type='submit' className='bg-primary text-white w-full rounded-md  p-2'>
              login
            </button>
          </div>
        </form>

        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={googleSignUp} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>

        <p className='mt-1 text-sm text-center text-gray-400'>
          Do not have an account?{' '}
          <Link to='/register' className='hover:underline hover:text-primary text-gray-600'>
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
