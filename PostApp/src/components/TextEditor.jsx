import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

function TextEditor({ label, value, onChange }) {
  return (
    <div className="w-full space-y-2">
      {label && <label className="block text-sm font-bold text-slate-700">{label}</label>}
      
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
        <Editor
          apiKey='fe2duzxeq60rz9vwq0s396f0xl9bl6xvivslqzr0v3t3vr1n' // Get this from TinyMCE website
          value={value}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            skin: "oxide",
            content_css: "default"
          }}
          onEditorChange={onChange} // This sends the HTML string back to your state
        />
      </div>
    </div>
  );
}

export default TextEditor;