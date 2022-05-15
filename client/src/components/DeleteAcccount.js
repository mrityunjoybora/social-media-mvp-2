import React from 'react'

function DeleteAcccount() {
  return (
    <div className='flex-1 py-4'>
      <p className='my-4 font-semibold text-lg text-center'>This will delete your account</p>
      <button className="hover:bg-red-100 transition duration-100 cursor-pointer text-center w-full py-2 font-medium text-red-500">
        Delete
      </button>
    </div>
  );
}

export default DeleteAcccount