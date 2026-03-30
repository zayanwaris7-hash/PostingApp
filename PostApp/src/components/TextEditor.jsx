import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState, useEffect } from 'react';
import slug from '../slugmaker/slug'
import { useDispatch } from 'react-redux';
import { addValues } from '../RTK/CurrentPostSlice';

function TextEditor(isClicked=false) {
  const dispatch=useDispatch();
  const [slugg,setslug]=useState()
  const [value, setvalue] = useState("")
  const [titlee, settitle] = useState("")
  const onChange=(newValue,editor)=>{
    setvalue(newValue)
  }
  useEffect(() => {
    dispatch(addValues({
      title:titlee,
      slug:slugg,
      content:value
    }));
  
    
  }, [value,slugg,titlee])

  useEffect(() => {
    setslug("");
    settitle("");
    setvalue("");
  
    
  }, [isClicked])
  
  

  return (
<div className="w-full space-y-6 md:space-y-8">
  {/* 1. Title Input Area */}
  <div className="space-y-2 group">
    <label className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-black text-slate-400 ml-1 transition-colors group-focus-within:text-indigo-500">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-focus-within:bg-indigo-500 transition-all"></span>
      Post Title
    </label>
    <input 
      value={titlee}
      type="text"
      autoComplete='on'
      onChange={(e) => {
        settitle(e.target.value)
        setslug(slug(e.target.value))
      }} 
      placeholder="What's on your mind?"
      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-white border-2 border-slate-100 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold text-slate-800 placeholder:text-slate-300 shadow-sm transition-all outline-none focus:border-indigo-100 focus:ring-4 focus:ring-indigo-500/5 hover:border-slate-200"
    />
    
    {/* 2. SLUG DISPLAY AREA (Auto-generated View) */}
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50/80 rounded-lg border border-slate-100 mt-1 max-w-fit animate-in fade-in slide-in-from-left-2 duration-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-indigo-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
      <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400">
        <span className="text-indigo-600 italic">
          {slugg || "your-post-slug"}
        </span>
      </span>
    </div>
  </div>

  {/* 3. Content / Editor Area */}
  <div className="space-y-2 group">
    <label className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-black text-slate-400 ml-1 transition-colors group-focus-within:text-indigo-500">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-focus-within:bg-indigo-500 transition-all"></span>
      Content Description
    </label>
    
    <div className="border-2 border-slate-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-white transition-all focus-within:border-indigo-100 focus-within:ring-4 focus-within:ring-indigo-500/5 hover:border-slate-200">
      <Editor
        apiKey='fe2duzxeq60rz9vwq0s396f0xl9bl6xvivslqzr0v3t3vr1n'
        value={value}
        init={{
          height: window.innerWidth < 640 ? 250 : 350, 
          menubar: false,
          placeholder: "Write your description here...",
          plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'],
          toolbar: window.innerWidth < 640 
            ? 'undo redo | bold italic | bullist numlist | link' 
            : 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          content_style: 'body { font-family:Inter,sans-serif; font-size:15px; color: #334155; line-height: 1.6; padding: 10px; }',
          skin: "oxide",
          content_css: "default",
          statusbar: false,
          branding: false,
          promotion: false,
          
        }}
        onEditorChange={onChange}
      />
    </div>
  </div>
</div>
  );
}

export default TextEditor;