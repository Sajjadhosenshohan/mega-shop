import { Link, useLocation, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import useAxiosPublic from "../Hooks/UseAxiosPublic";
// import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { Context } from "../Provider/AuthProvider";
const Register = () => {
  const axiosPublic = useAxiosPublic()
  // const navigate = useNavigate()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";
  const { createUser, setLoading, loading } = useContext(Context)

  const handleSignUp = async (event) => {
    event.preventDefault();
    // setLoading(true)
    const form = event.target
    const email = form.email.value
    const name = form.fullName.value
    const password = form.password.value

    // Validation
    // if (password.length < 6) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Please Enter A Password Of At Least 6 Characters",
    //     });
    //     return;
    // } else if (!/[A-Z]/.test(password)) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Please Enter A Password Of At Least 1 Uppercase Character",
    //     });
    //     return;
    // } else if (!/[a-z]/.test(password)) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Please Enter A Password Of At Least 1 Lowercase Character",
    //     });
    //     return;
    // }

    // for profile pic
    const profileImage = form.profileImage.files[0]
    const formData2 = new FormData()
    formData2.append('image', profileImage)

    const key = import.meta.env.VITE_IMGBB_API_KEY

    try {
      
      const { data: profileData } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${key}`,
        formData2
      )

      

      // create user
      await createUser(email, password)
        .then(res => {
          console.log(res?.user)

          const info = {
            name,
            email,
            profileImage: profileData?.data.display_url,
          }

          // console.log(info)

          axiosPublic.post("/users", info)
            .then(res => {
              if (res.data.insertedId) {
                toast.success('Successfully register')
              }
              navigate(from);
              // setLoading(false)
            })
        })

    } catch (err) {
      toast.error(err.message)
      // setLoading(false)
    }
  }

  if (loading) return <Spinner />

  return (
    <div className='flex justify-center items-center mt-10'>

      {/* <Helmet>
        <title>Register Hr</title>
      </Helmet> */}
      <div className='flex flex-col p-6 rounded-md sm:p-10 bg-white text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Register</h1>
        </div>
        <form onSubmit={handleSignUp} className='space-y-6'>
          <div className='grid grid-cols-1  gap-6'>
            <div>
              <label htmlFor='fullName' className='block mb-2 text-sm'>
                Full Name
              </label>
              <input
                type='text'
                name='fullName'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>


            <div>
              <label htmlFor='profileImage' className='block mb-2 text-sm'>
                Profile Picture
              </label>
              <input
                type='file'
                name='profileImage'
                placeholder='Enter Your Profile Picture Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

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
            <button type='submit' className='bg-primary w-full rounded-md  p-2'>
              Sign Up
            </button>
          </div>
        </form>

        <p className=' text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link to='/login' className='hover:underline hover:text-primary text-gray-600'>
            Login
          </Link>.
        </p>
      </div>
    </div>
  )
}

export default Register
