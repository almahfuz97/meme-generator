import memesData from "../memesData"
import React from "react"

export default function Meme() {
    const [formData, setFormData] = React.useState({
        topText: 'Top Text',
        bottomText: 'Bottom Text',
        imgUrl: "https://i.imgflip.com/4t0m5.jpg"
    })
    function handleChange(e) {
        const { name, value } = e.target;
        // console.log(name, value)
        setFormData(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
        console.log(formData.bottomText);
    }

    // onsubmit handler
    function handleSubmit(e) {
        const datas = memesData.data.memes;
        const url = datas[Math.floor(Math.random() * datas.length)].url;
        console.log(url)
        e.preventDefault();
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                imgUrl: url
            }
        })
    }
    return (
        <section className="memeClass">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-div">
                        <input onChange={handleChange}
                            placeholder="top text"
                            name="topText"
                            value={formData.topText}

                        />
                        <input onChange={handleChange}
                            placeholder="bottom text"
                            name="bottomText"
                            value={formData.bottomText}
                        />
                    </div>

                    <div className="btn-div">
                        <button className="btn">Get New Meme Image</button>
                    </div>
                </form>
                <div className="img-div">
                    <h1 className="meme--text top">{formData.topText}</h1>
                    <h1 className="meme--text bottom">{formData.bottomText}</h1>
                    <img src={formData.imgUrl}></img>
                </div>
            </div>
        </section>


    )
}