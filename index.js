window.onload = function() { 
  const browseFile = document.getElementById('browse-file')
  const uploadButton = document.getElementById('upload-button')
  const fileName = document.getElementById('file-name')

  const saveImageButton = document.getElementById('saveImage')
  const img = document.getElementById('image-preview')
  const reader = new FileReader()

  const imgBlock = document.getElementById('img-block')
  const previewImage = imgBlock.querySelector('.image-preview')

  uploadButton.addEventListener('click', function() {
    browseFile.click()
  })

  browseFile.addEventListener('change', function() {
    const file = this.files[0]
    console.log(file) 
    saveImageButton.style.display = 'block'

    if (file) {
      imgBlock.style.display = 'block'

      reader.addEventListener('load', function() {
        console.log('---------------------------------------------------------')
        console.log(this)
        console.log('---------------------------------------------------------')
        previewImage.setAttribute('src', this.result)

        img.src = this.result
        console.log(img.src)

        saveImageButton.addEventListener('click', function() {
          const a = document.createElement('a')
          a.href = img.src
          a.download = 'image.png'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          saveImageButton.style.display = 'none'
          fileName.innerHTML = ''
          imgBlock.style.display = 'none'
        })
      })
      reader.readAsDataURL(file)
    }

    if (browseFile.value) {
      fileName.innerHTML = file.name
    } else {
      console.log('Error!')
    }
  })
}