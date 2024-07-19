import PropTypes from "prop-types"
import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'
import Button from "../../buttons/Button"
import { usePostForm } from "../../../hooks/usePostForm"

const PostContentForm = ({ initialValue = "<p></p>" }) => {
  const {handleSavePost} = usePostForm()

  const editorRef = useRef(null);
  const [dirty, setDirty] = useState(false);

  const nodeToJson = (node) => {
    const obj = {type: node.nodeName.toLowerCase()}
    if(node.nodeType === Node.TEXT_NODE) {
      obj.content = node.nodeValue
    }
    if(node.attributes) {
      const attrs = Array.from(node.attributes)
      obj.attributes = {}
      attrs.forEach(attr => {
        obj.attributes[attr.name] = attr.value
      })
    }
    if(node.style && node.style.cssText) {
      obj.styles = node.style.cssText
    }
    if(node.childNodes && node.childNodes.length > 0) {
      obj.children = Array.from(node.childNodes).map(childNode => nodeToJson(childNode))
    }
    return obj
  }

  const htmlToJson = (htmlContent) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, "text/html")
    const body = doc.body
    const json = Array.from(body.childNodes).map(node => nodeToJson(node))
    return json
  }

  const save = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      await handleSavePost(content)
      setDirty(false);
      editorRef.current.setDirty(false)
    }
  };
  
  const handleImageUpload = (blobInfo, progress, failure) => {
    return new Promise((resolve, reject) => {
      const file = blobInfo.blob();
      progress(10)
    
      Resizer.imageFileResizer(
        file,
        760,
        760,
        'WEBP',
        100,
        0,
        (uri) => {
          progress(20)
          const byteString = atob(uri.split(',')[1]);
          const mimeString = uri.split(',')[0].split(':')[1].split(';')[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          progress(30)
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          progress(50)
          const webpFile = new Blob([ab], { type: mimeString });
          const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLUDINARY_CLOUD}/upload`
          const fd = new FormData()
          fd.append("upload_preset", import.meta.env.VITE_CLUDINARY_PRESET)
          fd.append("file", webpFile, 'image.webp')
          progress(70)
          axios.post(url, fd)
          .then(response =>{
            progress(100)
            resolve(response.data.url)
          })
          .catch(err => {
            console.log(err)
            reject({message: "Error al subir la imagen", remove: true})
          })
        },
        'base64'
      );
    })
  };

  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_APIKEY}
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={initialValue}
        onDirty={() => setDirty(true)}
        init={{
          height: 500,
          language: 'es',
          menubar: false,
          plugins: 'importcss autolink autosave save directionality visualblocks visualchars image link media codesample charmap nonbreaking insertdatetime advlist lists charmap quickbars emoticons',
          toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap emoticons | quickimage media link',
          file_picker_types: 'image',
          file_picker_callback: (callback, value, meta) => {
            if (meta.filetype === 'image') {
              callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
            }
          },
          images_upload_handler: handleImageUpload,
          quickbars_selection_toolbar: 'bold italic | quicklink blockquote',
          quickbars_insert_toolbar: 'quickimage media',
          quickbars_image_toolbar: 'alignleft aligncenter alignright',
          contextmenu: "link image",
          content_style: 'body { font-family:Arial,sans-serif; font-size:14px }'
        }}
      />
      <div className="m-auto">
        <Button handleClick={save} text={"Guardar"} disabledButton={!dirty} />
        
      </div>
      {/* {dirty && <p>Hay cambios sin guardar</p>} */}
    </>
  );
}

PostContentForm.propTypes = {
    initialValue: PropTypes.string
}

export default PostContentForm