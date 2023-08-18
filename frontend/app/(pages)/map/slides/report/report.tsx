import React, {useState} from 'react';

const Report = () => {

    const [selectedImage, setSelectedImage] = useState<any[]>([])
    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        if (file) {
            const reader = new FileReader()
            reader.onload = (e: any) => {
                setSelectedImage([...selectedImage, e.target.result])
            }
            reader.readAsDataURL(file)
        }
        // отправляtь на сервер formData
    }

    // cols="30" rows="10" textarea
    return (
        <>
            <h1 className="title">
                Оставьте отзыв
            </h1>
            <div className="review-wrapper">
                <p className="description">Нам будет полезно узнать больше</p>
                <textarea placeholder="Максимум 200 символов" name="review" id="review">
               </textarea>
                <div className="images-container">
                    {
                        selectedImage.length > 0 && selectedImage.map((image, key) => (
                            <img key={key} src={image} className='uploaded-image' alt='uploaded'/>
                        ))
                    }
                </div>
                <div className="button-upload">
                    <input title='Загрузить фото' id='input_file' type="file" accept="image/*"
                           onChange={handleFileChange} className="upload_photo"/>
                    <label htmlFor="input_file">Загрузить фото</label>
                </div>
            </div>
        </>
    );
};

export default Report;