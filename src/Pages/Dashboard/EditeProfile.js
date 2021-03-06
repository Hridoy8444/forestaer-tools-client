import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import useUserdata from '../../hooks/useUserData';

const EditProfile = () => {
    const [user] = useAuthState(auth);
    const [userdata, setUserdata] = useState();

    useEffect(() => {
        fetch(`https://calm-headland-08657.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserdata(data))
    }, [user.email])



    const handleUpdateProfile = event => {
        event.preventDefault();
        const phone = parseInt(event.target.phone.value)
        const userData = {
            name: event.target.name.value,
            email: user.email,
            education: event.target.education.value,
            city: event.target.city.value,
            phone: phone,
            link: event.target.link.value,
            // imglink: event.target.imglink.value
        }
        fetch(`https://calm-headland-08657.herokuapp.com/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data);
                    toast.success('Profile has been updated!')
                } else {
                    toast.error('Profile could not be updated Try Again!');
                    console.log(data);

                }
            })
    }
    return (
        <div>
            <div className=''>
                <h2 className='text-center text-2xl '>My Profile</h2>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2' >

                    {/* <div className="">
                        <img className='w-56 rounded-full ml-16 lg:ml-32' src={userdata.imglink ? userdata.imglink : "https://api.lorem.space/image/face?hash=92310"} alt='blank' />

                    </div> */}
                    <div className='mx-10'>
                        <form onSubmit={handleUpdateProfile} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                            <div className="card-body ">
                                <h2 className='text-center'>Edit Profile</h2>
                                <div className="form-control">

                                    <input type="text" id='name' name='name' placeholder='Name' className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="email" name='email' disabled value={user.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="text" name='education' required placeholder="Education" className="input input-bordered" />

                                </div>
                                <div className="form-control">

                                    <input type="text" name='city' required placeholder="City" className="input input-bordered" />

                                </div>
                                <div className="form-control">

                                    <input type="number" name='phone' required placeholder="Phone" className="input input-bordered" />

                                </div>
                                <div className="form-control">

                                    <input type="text" name='link' required placeholder="LinkedIn Profile Link" className="input input-bordered" />

                                </div>
                                {/* <div className="form-control">

                                    <input type="text" name='imglink' required placeholder="User Picture Link" className="input input-bordered" />

                                </div> */}
                                <div className="form-control mt-6">
                                    <input type='submit' className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default EditProfile;