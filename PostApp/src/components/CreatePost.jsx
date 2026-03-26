
import TextEditor from './TextEditor'
import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useState } from 'react';
import Service from '../Appwrite/config2';


function CreatePost({ User }) {
  
  const fileInputRef = useRef(null);
 
  const st=useSelector((state)=>(state.user));


  const FileUploadLogic = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadf = await Service.uploadFile(file);
      if (uploadf) {
        const creation = await Service.createPost({
          title: "",
          slug: "",
          content:"",
          featuredImage: uploadf.$id,
          status: st,
          userId: User.$id,
        })
      }
    }
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 shadow-sm border border-slate-100 max-w-2xl mx-auto">
      <div className="flex gap-3 sm:gap-4">
        {/* Avatar */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
          <img
            src={`https://ui-avatars.com/api/?name=${User?.name || 'User'}&background=6366f1&color=fff&size=128`}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          {/* Your TinyMCE Editor Component */}
          <div className="min-h-[100px]">
            <TextEditor  />
          </div>




          <div className="flex justify-between items-center mt-3 sm:mt-4">
            <div className="flex items-center gap-1 sm:gap-2">

              {/* Image Upload Button */}
              <button
                onClick={() => {
                  fileInputRef.current.click();
                }}
                onChange={FileUploadLogic}
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors flex items-center justify-center"
                title="Add Image"
              >
                <span className="text-lg sm:text-xl">🖼️ </span>
                <span className="text-sm hidden sm:inline">Image</span>

              </button>
              {/* HIDDEN FILE INPUT */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
              />

              {/* Toggle Link Input Button */}


            </div>

            {/* Post Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 sm:px-10 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95 text-sm sm:text-base">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost