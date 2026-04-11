import TextEditor from './TextEditor'
import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useState } from 'react'; // Removed 'use' as it was unused
import Service from '../Appwrite/config2';
import { addPosts } from '../RTK/CurrentUserPostSlice';

function CreatePost({ User }) {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [file, setfile] = useState(null);
  const [err, seterr] = useState("");
  const [isClickedd, setisClicked] = useState(false);

  const st = useSelector((state) => (state.user));
  const postData = useSelector((state) => (state.CurrentPost));

  // Logic for handling file selection
  const FileUploadLogic = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setfile(e.target.files[0]);
    }
  };

  const PostCreation = async () => {
    
    // Clear previous error before starting new attempt
    seterr("");

    if (file && postData.content) {
      try {
        const uploadf = await Service.uploadFile(file);
        
        if (uploadf) {
          try {
            const creation = await Service.createPost({
              title: String(postData.title),
              slug: String(postData.slug),
              content: String(postData.content),
              featuredImage:String( uploadf.$id),
              status: String(st),
              userId: String(User.$id),
            });
            
            if (creation) {
              console.log(creation)
              setisClicked(!isClickedd);
              dispatch(addPosts(creation));
              // Reset state on success
              setfile(null);
              seterr(""); 
            }
          } catch (error) {
            // Set error from createPost failure
            seterr(error.message || "Failed to create post");
          }
        }
      } catch (error) {
        // Set error from uploadFile failure
        seterr(error.message || "Failed to upload image");
      }
    } else {
      seterr("Please select an image and write some content!");
    }
  };

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
          {/* Error Message Display */}
          {err && (
            <div className="mb-4 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2" role="alert">
              <span className="text-lg">⚠️</span>
              <p className="text-sm font-medium">{err}</p>
            </div>
          )}

          {/* Your TinyMCE Editor Component */}
          <div className="min-h-[100px]">
            <TextEditor isClicked={isClickedd} />
          </div>

          <div className="flex justify-between items-center mt-3 sm:mt-4">
            <div className="flex items-center gap-1 sm:gap-2">

              {/* Image Upload Button */}
              <button
                type="button"
                onClick={() => {
                  fileInputRef.current.click();
                }}
                className={`p-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${file ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-100 text-slate-500'}`}
                title="Add Image"
              >
                <span className="text-lg sm:text-xl">🖼️ </span>
                <span className="text-sm hidden sm:inline">{file ? 'Image Added' : 'Image'}</span>
              </button>

              {/* HIDDEN FILE INPUT - Moved onChange here for logic to work */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={FileUploadLogic}
                className="hidden"
                accept="image/*"
              />
            </div>

            {/* Post Button */}
            <button
              onClick={PostCreation}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 sm:px-10 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95 text-sm sm:text-base"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;